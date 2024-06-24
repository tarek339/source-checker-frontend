import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatches, useTranslations } from "../../hooks";
import { IModalContent } from "../../types/interfaces/components";
import SubTitle from "../fonts/SubTitle";
import CancelButton from "../buttons/CancelButton";
import ContButton from "../buttons/ContButton";
import { Alert } from "../icons";
import ButtonContainer from "./ButtonContainer";
import Flex from "./Flex";

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
        <p>{t("saveSurvey.deleteText")}</p>
        <p>{t("saveSurvey.deleteSection")}</p>
        <ButtonContainer style={{ paddingTop: "1em" }}>
          <ContButton onClick={closeModal} title={t("button.cancel")} />
          <CancelButton onClick={deleteSurvey} title={t("button.delete")} />
        </ButtonContainer>
      </Flex>
    </Flex>
  );
};

export default ModalContent;