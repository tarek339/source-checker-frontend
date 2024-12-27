import Flex from "../../containers/Flex";
import { useSelectors, useDispatches, useBreakPoints } from "../../../hooks";
import SubTitle from "../../fonts/SubTitle";
import ButtonContainer from "../../containers/ButtonContainer";
import Span from "../../fonts/Span";
import { Check } from "../../icons";
import { Button, Modal } from "../..";

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
      <Flex direction={"row"} gap={"10px"} align="flex-start">
        <Check />
        <Flex direction={"column"} gap={"15px"}>
          <Flex direction={"column"} gap={"5px"}>
            <SubTitle title={"Bitte warte"} />
            <Span
              title={"Einen Moment bitte, gleich kommt das nächste Beispiel."}
            />
          </Flex>
          <ButtonContainer style={{ justifyContent: "flex-end" }}>
            <Button onClick={closeModal} title={"Okay"} />
          </ButtonContainer>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default StandbyMessage;
