import { useEffect } from "react";
import { IQrCodeModal } from "../../types/interfaces/components";

const QrCodeModal = ({
  setIsVisible,
  isVisible,
  children,
  style,
}: IQrCodeModal) => {
  useEffect(() => {
    let modal = document.getElementById("qrCode");
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
