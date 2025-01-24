import { QRCodeCanvas } from "qrcode.react";
import { QRCodeProps } from "../types/interfaces/components";

const QrCode = ({ value, onClick, size, cursor }: QRCodeProps) => {
  return (
    <QRCodeCanvas
      onClick={onClick}
      size={size}
      value={value}
      style={{ cursor: cursor }}
    />
  );
};

export default QrCode;
