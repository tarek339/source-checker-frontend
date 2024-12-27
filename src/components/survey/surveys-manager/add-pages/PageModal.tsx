import { Modal } from "../../..";
import { useSelectors, useDispatches, useBreakPoints } from "../../../../hooks";
import { IPageModal } from "../../../../types/interfaces/components";
import Flex from "../../../containers/Flex";

const PageModal = ({ children, title }: IPageModal) => {
  const { modal } = useSelectors();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();

  return (
    <Modal
      open={modal}
      onClose={closeModal}
      style={{ width: windowWidth <= 635 ? "95%" : "600px" }}>
      <Flex direction={"column"} gap={"10px"}>
        <h3>{title}</h3>
        {children}
      </Flex>
    </Modal>
  );
};

export default PageModal;
