import { useSelectors, useDispatches, useBreakPoints } from "../../../hooks";
import QrCode from "../../QRCode";
import { Button, Flex, Modal } from "../..";

const QrCodeModal = () => {
  const { qrCode } = useSelectors();
  const { survey } = useSelectors();
  const { closeQrCodeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();

  return (
    <Modal
      open={qrCode}
      onClose={closeQrCodeModal}
      style={{ width: windowWidth < 395 ? "90%" : "" }}>
      <Flex justify="center" width="100%" gap="10px">
        <Flex direction="column" gap="10px">
          <QrCode
            size={windowWidth > 395 ? 300 : windowWidth - 100}
            value={survey?.link ?? ""}
          />

          <Button title={"OK"} onClick={closeQrCodeModal} />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default QrCodeModal;
