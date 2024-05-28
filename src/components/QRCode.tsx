import { QRCodeCanvas } from "qrcode.react";
import { IQRCode } from "../types/interfaces/components";

const QrCode = ({ value }: IQRCode) => {
  return <QRCodeCanvas size={150} value={value} />;
};

export default QrCode;
