import { useEffect } from "react";
import Modal from "../../parents/containers/Modal";
import { useSelectors, useDispatches, useScroll } from "../../../hooks";
import QrCode from "../../QRCode";

const QrCodeModal = () => {
  const { modal } = useSelectors();
  const { closeModal } = useDispatches();
  const { handleScroll } = useScroll();
  const { survey } = useSelectors();

  useEffect(() => {
    handleScroll();
  }, [modal]);

  return (
    <Modal isVisible={modal} setIsVisible={closeModal}>
      <QrCode size={300} value={survey?.link!} />
    </Modal>
  );
};

export default QrCodeModal;
