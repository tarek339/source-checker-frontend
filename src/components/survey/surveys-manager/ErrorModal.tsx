import { useEffect } from "react";
import {
  ButtonContainer,
  CancelButton,
  SubButton,
  Flex,
  FormContainer,
  Modal,
  SubTitle,
  Span,
} from "../..";
import {
  useSelectors,
  useTranslations,
  useDispatches,
  useBreakPoints,
  useScroll,
} from "../../../hooks";
import { IErrorModal } from "../../../types/interfaces/components";
import { Alert } from "../../icons";

const ErrorModal = ({
  onSubmit,
  status,
  statusText,
  errTitle,
  errMsg,
  optionOne,
  optionTwo,
}: IErrorModal) => {
  const { modal } = useSelectors();
  const { t } = useTranslations();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();
  const { handleScroll } = useScroll();

  useEffect(() => {
    handleScroll();
  }, [modal]);

  return (
    <Modal isVisible={modal} setIsVisible={closeModal}>
      <Flex direction={"row"} gap={"10px"} align="flex-start">
        <Alert />
        <Flex direction={"column"} gap={"5px"}>
          <SubTitle
            style={{ paddingTop: "3px" }}
            title={`${t("common.error")} ${status} ${statusText}`}
          />
          <Span fontSize={20} fontWeight={600} title={errTitle} />
          <Span title={errMsg} />
          <Span title={optionOne} />
          <Span title={optionTwo} />
          <FormContainer
            style={{
              paddingTop: "10px",
              alignItems: windowWidth <= 500 ? "" : "flex-end",
            }}
            onSubmit={onSubmit}
            gap={"0px"}>
            <ButtonContainer>
              <CancelButton onClick={closeModal} title={t("button.cancel")} />
              <SubButton
                type="submit"
                onClick={() => {
                  onSubmit;
                  closeModal();
                }}
                title={t("button.retry")}
              />
            </ButtonContainer>
          </FormContainer>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ErrorModal;
