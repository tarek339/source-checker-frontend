import { useEffect } from "react";
import {
  useDispatches,
  useLocaleStorage,
  useSelectors,
  useTranslations,
} from "../../hooks";
import DividerHorizontal from "../DividerHorizontal";
import Modal from "../parents/containers/Modal";
import ModalContent from "../parents/containers/ModalContent";
import useCompArray from "./useCompArray";
import Flex from "../parents/containers/Flex";
import SubHeader from "../parents/SubHeader";
import ButtonContainer from "../parents/containers/ButtonContainer";
import CancelButton from "../buttons/CancelButton";
import ContinueButton from "../buttons/ContinueButton";

const SaveSurvey = () => {
  const { t } = useTranslations();
  const { survey, modal } = useSelectors();
  const { closeModal, openModal } = useDispatches();
  const { surveyArray } = useCompArray();
  const { getSurvey } = useLocaleStorage();

  useEffect(() => {
    getSurvey();
  }, []);

  return (
    <>
      <Modal isVisible={modal} setIsVisible={closeModal}>
        <ModalContent
          url={`/survey/delete/${survey?._id}`}
          header={t("common.survey") + " " + "ID:" + " " + survey?.surveyId!}
          localeStorage={"surveyData"}
          page={"page"}
        />
      </Modal>
      <Flex
        direction={"column"}
        gap={"20px"}
        style={{
          margin: "0 auto",
          maxWidth: "800px",
        }}>
        <SubHeader title={t("saveSurvey.saveSurvey")} />
        <>
          {surveyArray.map((survey, index) => {
            return (
              <div key={index}>
                {survey.comp}
                <div style={{ paddingTop: "21px" }}>
                  {index !== surveyArray.length - 1 && <DividerHorizontal />}
                </div>
              </div>
            );
          })}
        </>

        <DividerHorizontal />
        <ButtonContainer>
          <CancelButton onClick={openModal} title={t("common.delete")} />
          <ContinueButton page={+4} />
        </ButtonContainer>
      </Flex>
    </>
  );
};

export default SaveSurvey;
