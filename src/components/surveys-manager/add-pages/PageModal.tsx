import { useDispatches, useSelectors, useBreakPoints } from "../../../hooks";
import Flex from "../../parents/containers/Flex";
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
      style={{ width: windowWidth <= 500 ? "100%" : "500px" }}>
      <Flex direction={"column"} gap={"10px"}>
        <h3>{title}</h3>
        {children}
      </Flex>
    </Modal>
  );
};

export default PageModal;
