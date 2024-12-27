import { useEffect } from "react";
import { IChangeViewsModal } from "../../types/interfaces/components";
import { useBreakPoints } from "../../hooks";

const ChangeViewsModal = ({
  setIsVisible,
  isVisible,
  children,
  style,
}: IChangeViewsModal) => {
  const { windowWidth } = useBreakPoints();

  useEffect(() => {
    const modal = document.getElementById("viewsModal");
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
          overflowY: windowWidth < 1200 ? "scroll" : "auto",
          height: windowWidth < 1200 ? "80vh" : "auto",
          ...style,
        }}>
        {children}
      </div>
    </div>
  );
};

export default ChangeViewsModal;
