import { useEffect } from "react";
import { useSelectors, useScroll, useDispatches } from "../../../hooks";
import QrCode from "../../QRCode";
import QrCodeModal from "../../containers/QrCodeModal";
import { Button, Flex } from "../..";

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
      <Flex direction="column" gap="10px">
        <QrCode size={300} value={survey?.link ?? ""} />
        <Button title={"OK"} onClick={closeQrCodeModal} />
      </Flex>
    </QrCodeModal>
  );
};

export default QrCodeComp;
