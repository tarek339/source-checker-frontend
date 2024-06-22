import { QRCodeCanvas } from "qrcode.react";
import { IQRCode } from "../types/interfaces/components";

const QrCode = ({ value, onClick, size, cursor }: IQRCode) => {
  return (
    <QRCodeCanvas
      onClick={onClick}
      size={!size ? 150 : size}
      value={value}
      style={{ cursor: cursor }}
    />
  );
};

export default QrCode;
