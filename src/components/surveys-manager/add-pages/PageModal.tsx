import { useDispatches, useSelectors, useBreakPoints } from "../../../hooks";
import Modal from "../../parents/containers/Modal";

export interface IPageModal {
  children: JSX.Element;
  title: string;
}

const PageModal = ({ children, title }: IPageModal) => {
  const { modal } = useSelectors();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();

  return (
    <Modal
      isVisible={modal}
      setIsVisible={closeModal}
      style={{ width: windowWidth <= 500 ? "80%" : "500px" }}>
      <div className="modal-content">
        <h3>{title}</h3>
        {children}
      </div>
    </Modal>
  );
};

export default PageModal;
