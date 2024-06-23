import { useEffect } from "react";
import { IModal } from "../../types/interfaces/components";

const Modal = ({ children, isVisible, setIsVisible, style }: IModal) => {
  useEffect(() => {
    let modal = document.getElementById("modal");
    window.onclick = function (event) {
      if (modal && event.target == modal) {
        setIsVisible(true);
      }
    };
  }, [isVisible, setIsVisible]);

  return (
    <div
      id="modal"
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

export default Modal;
