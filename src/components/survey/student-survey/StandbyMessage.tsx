import { useSelectors, useDispatches, useBreakPoints } from "../../../hooks";
import { Check } from "../../icons";
import { Button, Grid, Modal, SubTitle, Text } from "../..";

const StandbyMessage = () => {
  const { modal } = useSelectors();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();

  return (
    <Modal
      open={modal}
      onClose={closeModal}
      style={{
        width: windowWidth <= 635 ? "95%" : "600px",
      }}>
      <Grid flexStart width={"100%"} nowrap alignStart>
        <Check />
        <Grid column>
          <Grid column>
            <SubTitle title={"Bitte warte"} />
            <Text
              text={"Einen Moment bitte, gleich kommt das nächste Beispiel."}
            />
          </Grid>
          <Grid flexEnd width={"100%"}>
            <Button onClick={closeModal} title={"Okay"} />
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default StandbyMessage;
