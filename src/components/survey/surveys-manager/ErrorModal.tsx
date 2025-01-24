import { Alert } from "../../icons";
import { Button, Grid, Modal, SubTitle, Text } from "../..";
import { useSelectors, useDispatches, useBreakPoints } from "../../../hooks";
import { ErrorModalProps } from "../../../types/interfaces/components";

const ErrorModal = ({ onClick }: ErrorModalProps) => {
  const { modal } = useSelectors();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();

  return (
    <Modal
      open={modal}
      onClose={closeModal}
      style={{ width: windowWidth <= 465.6 ? "95%" : "465.6px" }}>
      <Grid flexStart width={"100%"} nowrap alignStart>
        <Alert />
        <Grid column noMargin width={"100%"}>
          <SubTitle title={"Verbindungsfehler"} />
          <div>
            <Text text={"Umfrage konnte nicht angelegt werden."} />
            <Text text={"Bitte versuche es später nochmal."} />
          </div>
          <Grid spacing={1} width={"100%"} columnReverse>
            <Button error onClick={closeModal} title={"abbrechen"} />
            <Button onClick={onClick} title={"verbinden"} />
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ErrorModal;
