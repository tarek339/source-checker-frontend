import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatches, useTranslations } from "../../hooks";
import { IModalContent } from "../../types/interfaces/components";
import { Alert } from "../icons";
import { Button, ButtonContainer, Flex, Span, SubTitle } from "..";

const ModalContent = ({ header, url }: IModalContent) => {
  const { closeModal } = useDispatches();
  const { t } = useTranslations();
  const navigate = useNavigate();

  const deleteSurvey = async () => {
    await axios.delete(`${url}`);
    navigate("/surveys-manager/choose-action");
    closeModal();
  };

  return (
    <Flex direction={"row"} gap={"10px"} align="flex-start">
      <Alert />
      <Flex direction={"column"} gap={"5px"} justify="flex-start">
        <SubTitle
          style={{ paddingTop: "0px" }}
          title={`${`${header} ${t("common.delete")}`}?`}
        />
        <Span title={t("saveSurvey.deleteText")} />
        <Span title={t("saveSurvey.deleteSection")} />
        <ButtonContainer style={{ paddingTop: "1em" }}>
          <Button error onClick={closeModal} title={t("button.cancel")} />
          <Button onClick={deleteSurvey} title={t("button.delete")} />
        </ButtonContainer>
      </Flex>
    </Flex>
  );
};

export default ModalContent;
