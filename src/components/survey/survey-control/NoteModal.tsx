import ButtonContainer from "../../containers/ButtonContainer";
import Flex from "../../containers/Flex";
import Modal from "../../containers/Modal";
import Span from "../../fonts/Span";
import { useDispatches, useSelectors } from "../../../hooks";
import { Alert } from "../../icons";
import SubTitle from "../../fonts/SubTitle";
import { Button } from "../..";
import { INoteModal } from "../../../types/interfaces/components";

const NoteModal = ({ onClick }: INoteModal) => {
  const { closeModal } = useDispatches();
  const { modal } = useSelectors();

  return (
    <Modal isVisible={modal} setIsVisible={closeModal}>
      <Flex direction={"row"} gap={"10px"} align="flex-start">
        <Alert />
        <Flex direction={"column"} gap={"5px"}>
          <SubTitle style={{ padding: "0px" }} title={"Achtung"} />
          <Span title={"Du startest einen neuen Durchgang."} />
          <Span
            title={
              "Wenn du das bestätigst werden die Daten von dem vorherigen Durchlauf gelöscht."
            }
          />
          <Span title={"Zurücksetzen ist nicht möglich."} />
          <ButtonContainer style={{ justifyContent: "flex-end" }}>
            <Button error onClick={closeModal} title={"Zurück"} />
            <Button onClick={onClick} title={"Neuer Durchgang"} />
          </ButtonContainer>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default NoteModal;
