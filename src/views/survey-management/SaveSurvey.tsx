import { useEffect } from "react";
import {
  useDispatches,
  useRequests,
  useScroll,
  useSelectors,
  useTranslations,
} from "../../hooks";
import {
  ContentContainer,
  Card,
  FramerMotion,
  Flex,
  SubTitle,
  Divider,
  CancelButton,
  ContinueButton,
  ButtonContainer,
  useCompArray,
  Modal,
  ModalContent,
  Title,
} from "../../components";

const SaveSurvey = () => {
  const { t } = useTranslations();
  const { survey, modal } = useSelectors();
  const { closeModal, openModal } = useDispatches();
  const { surveyArray } = useCompArray();
  const { fetchSurvey } = useRequests();
  const { handleScroll } = useScroll();

  useEffect(() => {
    handleScroll();
  }, [modal]);

  useEffect(() => {
    fetchSurvey();
  }, []);

  return (
    <ContentContainer>
      <Title title={t("survey.createManagement")} />
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
            <SubTitle title={t("saveSurvey.saveSurvey")} />
            <>
              {surveyArray.map((survey, index) => {
                return (
                  <div key={index}>
                    {survey.comp}
                    <div style={{ paddingTop: "21px" }}>
                      {index !== surveyArray.length - 1 && <Divider />}
                    </div>
                  </div>
                );
              })}
            </>
            <Divider />
            <ButtonContainer>
              <CancelButton onClick={openModal} title={t("button.delete")} />
              <ContinueButton
                path={`/surveys-manager/add-pages/${survey?._id}`}
              />
            </ButtonContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default SaveSurvey;
