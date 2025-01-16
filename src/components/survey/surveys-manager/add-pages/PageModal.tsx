import { Grid, Modal, SubTitle } from "../../..";
import { useSelectors, useDispatches, useBreakPoints } from "../../../../hooks";
import { PageModalProps } from "../../../../types/interfaces/components";

const PageModal = ({ children, title }: PageModalProps) => {
  const { modal } = useSelectors();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();

  return (
    <Modal
      open={modal}
      onClose={closeModal}
      style={{ width: windowWidth <= 635 ? "95%" : "600px" }}>
      <Grid column>
        <SubTitle title={title} />
        {children}
      </Grid>
    </Modal>
  );
};

export default PageModal;
