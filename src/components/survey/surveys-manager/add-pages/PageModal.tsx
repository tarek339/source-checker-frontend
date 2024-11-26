import { useEffect } from "react";
import {
  useSelectors,
  useDispatches,
  useBreakPoints,
  useScroll,
} from "../../../../hooks";
import { IPageModal } from "../../../../types/interfaces/components";
import Flex from "../../../containers/Flex";
import Modal from "../../../containers/Modal";

const PageModal = ({ children, title }: IPageModal) => {
  const { modal } = useSelectors();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();
  const { handleScroll } = useScroll();

  useEffect(() => {
    handleScroll();
  }, [handleScroll, modal]);

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
