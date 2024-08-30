import CancelButton from "../../buttons/CancelButton";
import SubButton from "../../buttons/SubButton";
import ButtonContainer from "../../containers/ButtonContainer";
import Flex from "../../containers/Flex";
import Modal from "../../containers/Modal";
import Span from "../../fonts/Span";
import { useDispatches, useSelectors } from "../../../hooks";
import { Alert } from "../../icons";
import SubTitle from "../../fonts/SubTitle";

export interface INoteModal {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

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
          <Span title={"Zurücksetzen ist nich möglich"} />
          <ButtonContainer style={{ justifyContent: "flex-end" }}>
            <CancelButton onClick={closeModal} title={"Zurück"} />
            <SubButton onClick={onClick} title={"Neuer Durchgang"} />
          </ButtonContainer>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default NoteModal;
