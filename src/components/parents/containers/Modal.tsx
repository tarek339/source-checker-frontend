import { useEffect } from "react";
import { IModal } from "../../../types/interfaces/components";

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
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: 2,
        overflow: "auto",
        height: "100%",
        width: "100%",
        background: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        top: 0,
        left: 0,
        animationName: "fadeIn",
        animationDuration: "0.2s",
        display: isVisible ? "flex" : "none",
      }}>
      <div
        style={{
          backgroundColor: "#FFF",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          ...style,
        }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
