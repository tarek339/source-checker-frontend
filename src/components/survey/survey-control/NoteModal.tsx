import { useBreakPoints, useDispatches, useSelectors } from "../../../hooks";
import { Alert } from "../../icons";
import SubTitle from "../../mui/SubTitle";
import { Button, Grid, Modal, Text } from "../..";
import { NoteModalProps } from "../../../types/interfaces/components";

const NoteModal = ({ onClick }: NoteModalProps) => {
  const { closeModal } = useDispatches();
  const { modal } = useSelectors();
  const { windowWidth } = useBreakPoints();

  return (
    <Modal
      open={modal}
      onClose={closeModal}
      style={{ width: windowWidth <= 883 ? "95%" : "838.84px" }}>
      <Grid flexStart width={"100%"} nowrap alignStart>
        <Alert />
        <Grid column>
          <SubTitle title={"Achtung"} />

          <div>
            <Text text={"Du startest einen neuen Durchgang."} />
            <Text
              text={
                "Wenn du das bestätigst werden die Daten von dem vorherigen Durchlauf gelöscht."
              }
            />
            <Text text={"Zurücksetzen ist nicht möglich."} />
          </div>

          <Grid
            width={"100%"}
            direction={windowWidth <= 515 ? "column" : "row"}
            justifyContent={windowWidth <= 515 ? "center" : "flex-end"}>
            <Button error onClick={closeModal} title={"Zurück"} />
            <Button onClick={onClick} title={"Neuer Durchgang"} />
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default NoteModal;
