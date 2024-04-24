import axios from "axios";
import { IModalContent } from "../../../types/interfaces/components";
import { useTranslations, useDispatches } from "../../../hooks";
import { Alert } from "../../icons";

const ModalContent = ({ header, url, localeStorage, page }: IModalContent) => {
  const { handlePage, closeModal } = useDispatches();
  const { t } = useTranslations();

  const deleteSurvey = async () => {
    await axios.delete(`${url}`);
    localStorage.removeItem(localeStorage);
    localStorage.removeItem(page);
    handlePage(0);
    closeModal();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
      }}>
      <Alert />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "5px",
        }}>
        <h3>
          {header} {t("common.delete")}?
        </h3>
        <p>{t("saveSurvey.deleteText")}</p>
        <p>{t("saveSurvey.deleteSection")}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "20px",
            marginTop: "10px",
          }}>
          <button className="continue-button" onClick={closeModal}>
            {t("common.cancel")}
          </button>
          <button onClick={deleteSurvey} className="back-button">
            {t("common.delete")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
