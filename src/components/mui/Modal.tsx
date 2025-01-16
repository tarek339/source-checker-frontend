import { Modal } from "@mui/material";
import { ModalProps } from "../../types/interfaces/components";
import { colors } from "../../assets/theme/colors";

const ModalComponent = ({ open, onClose, children, style }: ModalProps) => {
  const sx: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: colors.background.main,
    boxShadow: colors.shadow.card,
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
        background: colors.background.filter,
        animationDuration: "0.3s",
        animationName: "fadeIn",
      }}>
      <div style={{ ...sx, ...style }}>{children}</div>
    </Modal>
  );
};

export default ModalComponent;
