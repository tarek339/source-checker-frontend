import { useEffect } from "react";
import {
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../hooks";
import {
  SurveyContent,
  Card,
  FramerMotion,
  Flex,
  SubHeader,
  DividerHorizontal,
  CancelButton,
  ContinueButton,
  ButtonContainer,
  useCompArray,
  Modal,
  ModalContent,
  SubTitel,
} from "../../components";

const SaveSurvey = () => {
  const { t } = useTranslations();
  const { survey, modal } = useSelectors();
  const { closeModal, openModal } = useDispatches();
  const { surveyArray } = useCompArray();
  const { fetchSurvey } = useRequests();

  useEffect(() => {
    fetchSurvey();
  }, []);

  return (
    <SurveyContent>
      <SubTitel title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <Modal isVisible={modal} setIsVisible={closeModal}>
            <ModalContent
              url={`/survey/delete/${survey?._id}`}
              header={
                t("common.survey") + " " + "ID:" + " " + survey?.surveyId!
              }
            />
          </Modal>
          <Flex
            direction={"column"}
            gap={"20px"}
            style={{
              margin: "0 auto",
              maxWidth: "1000px",
            }}>
            <SubHeader title={t("saveSurvey.saveSurvey")} />
            <>
              {surveyArray.map((survey, index) => {
                return (
                  <div key={index}>
                    {survey.comp}
                    <div style={{ paddingTop: "21px" }}>
                      {index !== surveyArray.length - 1 && (
                        <DividerHorizontal />
                      )}
                    </div>
                  </div>
                );
              })}
            </>
            <DividerHorizontal />
            <ButtonContainer>
              <CancelButton onClick={openModal} title={t("common.delete")} />
              <ContinueButton
                path={`/surveys-manager/add-pages/${survey?._id}`}
              />
            </ButtonContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </SurveyContent>
  );
};

export default SaveSurvey;
