import { useSelectors, useDispatches, useBreakPoints } from "../../../hooks";
import QrCode from "../../QRCode";
import { Button, Grid, Modal } from "../..";

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
      <Grid center>
        <Grid column>
          <QrCode
            size={windowWidth > 395 ? 300 : windowWidth - 100}
            value={survey?.link ?? ""}
          />

          <Button title={"OK"} onClick={closeQrCodeModal} />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default QrCodeModal;
