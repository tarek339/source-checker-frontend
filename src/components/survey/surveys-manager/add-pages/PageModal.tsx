import { useEffect } from "react";
import {
  useSelectors,
  useDispatches,
  useBreakPoints,
  useScroll,
} from "../../../../hooks";
import Flex from "../../../parents/containers/Flex";
import Modal from "../../../parents/containers/Modal";
import { IPageModal } from "../../../../types/interfaces/components";

const PageModal = ({ children, title }: IPageModal) => {
  const { modal } = useSelectors();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();
  const { handleScroll } = useScroll();

  useEffect(() => {
    handleScroll();
  }, [modal]);

  return (
    <Modal
      isVisible={modal}
      setIsVisible={closeModal}
      style={{ width: windowWidth <= 500 ? "100%" : "600px" }}>
      <Flex direction={"column"} gap={"10px"}>
        <h3>{title}</h3>
        {children}
      </Flex>
    </Modal>
  );
};

export default PageModal;
