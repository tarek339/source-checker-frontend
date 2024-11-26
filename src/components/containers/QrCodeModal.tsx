import { useEffect } from "react";
import { IQrCodeModal } from "../../types/interfaces/components";
import { Cancel } from "../icons";

const QrCodeModal = ({
  setIsVisible,
  isVisible,
  children,
  style,
}: IQrCodeModal) => {
  useEffect(() => {
    const modal = document.getElementById("qrCode");
    window.onclick = function (event) {
      if (modal && event.target == modal) {
        setIsVisible(true);
      }
    };
  }, [isVisible, setIsVisible]);
  return (
    <div
      id="qrCode"
      className="modal"
      style={{
        display: isVisible ? "flex" : "none",
      }}>
      <div
        style={{
          position: "absolute",
          top: "250px",
          left: "1015px",
          cursor: "pointer",
        }}>
        <Cancel onClick={() => setIsVisible(false)} />
      </div>
      <div
        className="modal-children"
        style={{
          ...style,
        }}>
        {children}
      </div>
    </div>
  );
};

export default QrCodeModal;
