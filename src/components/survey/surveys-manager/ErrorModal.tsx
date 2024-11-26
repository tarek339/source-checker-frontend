import { useEffect } from "react";
import { ButtonContainer, Flex, Modal, Span, Button } from "../..";
import {
  useSelectors,
  useTranslations,
  useDispatches,
  useScroll,
} from "../../../hooks";
import { IErrorModal } from "../../../types/interfaces/components";
import { Alert } from "../../icons";

const ErrorModal = ({ onClick, errTitle, errMsg }: IErrorModal) => {
  const { modal } = useSelectors();
  const { t } = useTranslations();
  const { closeModal } = useDispatches();
  const { handleScroll } = useScroll();

  useEffect(() => {
    handleScroll();
  }, [handleScroll, modal]);

  return (
    <Modal isVisible={modal} setIsVisible={closeModal}>
      <Flex direction={"row"} gap={"10px"} align="flex-start">
        <Alert />
        <Flex direction={"column"} gap={"20px"}>
          <Span fontSize={20} fontWeight={600} title={errTitle} />
          <Span title={errMsg} />
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
