import { useEffect } from "react";
import { useSelectors, useScroll, useDispatches } from "../../../hooks";
import QrCode from "../../QRCode";
import QrCodeModal from "../../containers/QrCodeModal";

const QrCodeComp = () => {
  const { qrCode } = useSelectors();
  const { handleScroll } = useScroll();
  const { survey } = useSelectors();
  const { closeQrCodeModal } = useDispatches();

  useEffect(() => {
    handleScroll();
  }, [qrCode]);

  return (
    <QrCodeModal isVisible={qrCode} setIsVisible={closeQrCodeModal}>
      <QrCode size={300} value={survey?.link!} />
    </QrCodeModal>
  );
};

export default QrCodeComp;
