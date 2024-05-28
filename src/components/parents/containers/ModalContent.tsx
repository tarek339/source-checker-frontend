import axios from "axios";
import { IModalContent } from "../../../types/interfaces/components";
import { useTranslations, useDispatches } from "../../../hooks";
import { Alert } from "../../icons";
import CancelButton from "../../buttons/CancelButton";
import ContButton from "../../buttons/ContButton";
import ButtonContainer from "./ButtonContainer";
import Flex from "./Flex";
import SubHeader from "../SubHeader";

const ModalContent = ({ header, url, localeStorage, page }: IModalContent) => {
  const { handlePage, closeModal } = useDispatches();
  const { t } = useTranslations();

  const deleteSurvey = async () => {
    await axios.delete(`${url}`);
    localStorage.removeItem(localeStorage);
    localStorage.removeItem(page);
    handlePage(0);
    closeModal();
  };

  return (
    <Flex direction={"row"} gap={"10px"} align="flex-start">
      <Alert />
      <Flex direction={"column"} gap={"5px"} justify="flex-start">
        <SubHeader title={`${`${header} ${t("common.delete")}`}?`} />
        <p>{t("saveSurvey.deleteText")}</p>
        <p>{t("saveSurvey.deleteSection")}</p>
        <ButtonContainer
          style={{ justifyContent: "flex-end", paddingTop: "1em" }}>
          <ContButton onClick={closeModal} title={t("common.cancel")} />
          <CancelButton onClick={deleteSurvey} title={t("common.delete")} />
        </ButtonContainer>
      </Flex>
    </Flex>
  );
};

export default ModalContent;
