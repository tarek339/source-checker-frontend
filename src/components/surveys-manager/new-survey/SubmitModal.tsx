import { useDispatches, useSelectors, useTranslations } from "../../../hooks";
import { ISubmitModal } from "../../../types/interfaces/components";
import Modal from "../../parents/containers/Modal";
import { RiErrorWarningFill } from "react-icons/ri";

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
        <div style={{ marginTop: "0px" }}>
          <RiErrorWarningFill color="#f44336" fontSize="28px" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <h3>Umfrage anlegen?</h3>
          <p>Sind Sie sicher?</p>
          <p>Die Daten lassen sich später nicht mehr ändern!</p>
          <form className="button-group" onSubmit={onSubmit}>
            <button className="back-button" type="button" onClick={closeModal}>
              Abbrechen
            </button>
            <button className="continue-button" type="submit">
              Umfrage anlegen
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SubmitModal;
