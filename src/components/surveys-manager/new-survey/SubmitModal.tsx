import { useDispatches, useSelectors, useTranslations } from "../../../hooks";
import { ISubmitModal } from "../../../types/interfaces/components";
import { Alert } from "../../icons";
import Modal from "../../parents/containers/Modal";

const SubmitModal = ({ onSubmit }: ISubmitModal) => {
  const { modal } = useSelectors();
  const { t } = useTranslations();
  const { closeModal } = useDispatches();

  return (
    <Modal isVisible={modal} setIsVisible={closeModal}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "flex-start",
        }}>
        <Alert />
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <h3>{t("common.create")}</h3>
          <p>{t("newSurvey.sure")}</p>
          <p>{t("newSurvey.warningText")}</p>
          <form className="button-group" onSubmit={onSubmit}>
            <button className="back-button" type="button" onClick={closeModal}>
              {t("common.cancel")}
            </button>
            <button className="continue-button" type="submit">
              {t("common.create")}
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SubmitModal;
