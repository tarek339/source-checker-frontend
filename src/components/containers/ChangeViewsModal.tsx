import { useEffect } from "react";
import { IChangeViewsModal } from "../../types/interfaces/components";

const ChangeViewsModal = ({
  setIsVisible,
  isVisible,
  children,
  style,
}: IChangeViewsModal) => {
  useEffect(() => {
    let modal = document.getElementById("viewsModal");
    window.onclick = function (event) {
      if (modal && event.target == modal) {
        setIsVisible(true);
      }
    };
  }, [isVisible, setIsVisible]);
  return (
    <div
      id="viewsModal"
      className="views-modal"
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

export default ChangeViewsModal;
