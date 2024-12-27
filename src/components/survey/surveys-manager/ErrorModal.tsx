import ButtonContainer from "../../containers/ButtonContainer";
import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import { Alert } from "../../icons";
import { Button, Modal } from "../..";
import { useSelectors, useTranslations, useDispatches } from "../../../hooks";
import { IErrorModal } from "../../../types/interfaces/components";

const ErrorModal = ({ onClick }: IErrorModal) => {
  const { modal } = useSelectors();
  const { t } = useTranslations();
  const { closeModal } = useDispatches();

  return (
    <Modal open={modal} onClose={closeModal}>
      <Flex direction={"row"} gap={"10px"} align="flex-start">
        <Alert />
        <Flex direction={"column"} gap={"20px"}>
          <Span fontSize={20} fontWeight={600} title={"Verbindungsfehler"} />
          <Span
            title={
              "Umfrage konnte nicht angelegt werden. Bitte versuche es später nochmal"
            }
          />
          <ButtonContainer>
            <Button error onClick={closeModal} title={t("button.cancel")} />
            <Button onClick={onClick} title={t("button.retry")} />
          </ButtonContainer>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ErrorModal;
