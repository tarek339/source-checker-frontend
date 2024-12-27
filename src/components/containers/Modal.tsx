import { Modal } from "@mui/material";
import { IModal } from "../../types/interfaces/components";

const ModalComponent = ({ open, onClose, children, style }: IModal) => {
  const sx: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding: "30px",
    border: "none",
    borderRadius: "20px",
    outline: "none",
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      hideBackdrop
      style={{
        backdropFilter: "blur(2px)",
        background: "rgb(169, 169, 169, 0.25)",
        animationDuration: "0.3s",
        animationName: "fadeIn",
      }}>
      <div style={{ ...sx, ...style }}>{children}</div>
    </Modal>
  );
};

export default ModalComponent;
