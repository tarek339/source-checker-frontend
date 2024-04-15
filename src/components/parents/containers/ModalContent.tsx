import axios from "axios";
import { IModalContent } from "../../../types/interfaces/components";
import useDispatches from "../../../hooks/useDispatches";
import { useTranslations } from "../../../hooks";

const ModalContent = ({ header, url, localeStorage, id }: IModalContent) => {
  const { handlePage, closeModal } = useDispatches();
  const { t } = useTranslations();

  const deleteSurvey = async () => {
    await axios.post(`${url}`, id);
    localStorage.removeItem(localeStorage);
    handlePage(0);
    closeModal();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "20px",
      }}>
      <h3>
        {header} {t("common.delete")}?
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "20px",
        }}>
        <button className="continue-button" onClick={closeModal}>
          {t("common.cancel")}
        </button>
        <button onClick={deleteSurvey} className="back-button">
          {t("common.delete")}
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
