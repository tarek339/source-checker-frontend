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
  ButtonContainer,
  useCompArray,
  Modal,
  ModalContent,
  Title,
  Button,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { FaCircleDot } from "react-icons/fa6";

const SaveSurvey = () => {
  const { t } = useTranslations();
  const { survey, modal } = useSelectors();
  const { closeModal, openModal } = useDispatches();
  const { surveyArray } = useCompArray();
  const { fetchSurvey } = useRequests();
  const { handleScroll } = useScroll();
  const navigate = useNavigate();

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
            <Flex
              direction={"row"}
              gap={"10px"}
              justify="flex-start"
              style={{
                border: "1.5px solid rgb(40, 53, 195, 0.2)",
                color: "#2835c3",
                backgroundColor: "rgb(40, 53, 195, 0.05)",
                padding: "15px 20px",
              }}>
              <Flex
                direction={"row"}
                justify="flex-start"
                align="flex-start"
                style={{
                  paddingTop: "8px",
                }}>
                <FaCircleDot />
              </Flex>
              <div>
                <h4 style={{ fontSize: "22px", color: "#2835c3" }}>Rating</h4>
                <p style={{ color: "#2835c3" }}>{t("newSurvey.ratingText")}</p>
              </div>
            </Flex>
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
              <Button error onClick={openModal} title={t("button.delete")} />
              <Button
                onClick={() =>
                  navigate(`/surveys-manager/add-pages/${survey?._id}`)
                }
                title={t("button.continue")}
              />
            </ButtonContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default SaveSurvey;
