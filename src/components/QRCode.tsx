import { QRCodeCanvas } from "qrcode.react";
import { IQRCode } from "../types/interfaces/components";

const QrCode = ({ value }: IQRCode) => {
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
      <QRCodeCanvas value={value} />
    </div>
  );
};

export default QrCode;
