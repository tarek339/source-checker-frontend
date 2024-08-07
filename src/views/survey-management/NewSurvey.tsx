import { useState } from "react";
import {
  BackButton,
  ButtonContainer,
  Card,
  Divider,
  ErrorModal,
  Flex,
  FormButton,
  FormContainer,
  FramerMotion,
  SubTitle,
  Title,
  ContentContainer,
  SwitchToggle,
} from "../../components";
import { useDispatches, useTranslations } from "../../hooks";
import axios from "axios";
import { FaCircleDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { dispatchLoading, closeModal, openModal, dispatchSurvey } =
    useDispatches();
  const navigate = useNavigate();

  const [anonymousResults, setAnonymousResults] = useState(false);
  const [freeUserNames, setFreeUserNames] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      dispatchLoading(true);
      const res = await axios.post("/survey/create", {
        anonymousResults,
        freeUserNames,
      });
      dispatchSurvey(res.data.survey);
      dispatchLoading(false);
      navigate(`/surveys-manager/save-survey/${res.data.survey._id}`);
      closeModal();
    } catch (error) {
      dispatchLoading(false);
      openModal();
      console.log(error);
    }
  };

  return (
    <ContentContainer>
      <Title title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <ErrorModal onSubmit={handleSubmit} />
          <Flex
            direction={"column"}
            gap={"25px"}
            style={{
              margin: "0 auto",
            }}>
            <SubTitle title={t("newSurvey.headerOne")} />
            <Divider />
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
                gap={"0px"}
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

            <SubTitle title={t("newSurvey.headerTwo")} />

            <Divider />

            <FormContainer onSubmit={handleSubmit} gap={"30px"}>
              <SwitchToggle
                label={t("newSurvey.freeNames")}
                labelText={t("newSurvey.labelTextOne")}
                checked={freeUserNames}
                onChange={() => setFreeUserNames(!freeUserNames)}
                ifOnText={t("newSurvey.yes")}
                ifOffText={t("newSurvey.no")}
                htmlFor={"user-names"}
              />

              <SwitchToggle
                label={t("newSurvey.anonymous")}
                labelText={t("newSurvey.labelTextTwo")}
                checked={anonymousResults}
                onChange={() => setAnonymousResults(!anonymousResults)}
                ifOnText={t("newSurvey.yes")}
                ifOffText={t("newSurvey.no")}
                htmlFor={"anonymous"}
              />
              <Divider />

              <ButtonContainer>
                <BackButton path={"/surveys-manager/choose-action"} />
                <FormButton title={t("button.create")} />
              </ButtonContainer>
            </FormContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default NewSurvey;
