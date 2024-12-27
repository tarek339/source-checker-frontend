import { useSelectors, useDispatches } from "../../../hooks";
import QrCode from "../../QRCode";
import { Button, Flex, Modal } from "../..";

const QrCodeComp = () => {
  const { qrCode } = useSelectors();
  const { survey } = useSelectors();
  const { closeQrCodeModal } = useDispatches();

  return (
    <Modal open={qrCode} onClose={closeQrCodeModal}>
      <Flex direction="column" gap="10px">
        <QrCode size={300} value={survey?.link ?? ""} />
        <Button title={"OK"} onClick={closeQrCodeModal} />
      </Flex>
    </Modal>
  );
};

export default QrCodeComp;
