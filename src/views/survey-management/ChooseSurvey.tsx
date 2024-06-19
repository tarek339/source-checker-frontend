import { useState } from "react";
import {
  BackButton,
  Card,
  Divider,
  Flex,
  FormButton,
  FormContainer,
  FramerMotion,
  Input,
  SubTitle,
  Title,
  ContentContainer,
} from "../../components";
import { useTranslations, useInputErrors, useDispatches } from "../../hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChooseSurvey = () => {
  const { t } = useTranslations();
  const { emptyInput, incorrectType, fetchError } = useInputErrors();
  const { dispatchLoading } = useDispatches();
  const navigate = useNavigate();

  const [surveyId, setSurveyId] = useState("");
  const [surveyPin, setSurveyPin] = useState("");
  const [IDErrMsg, setIDErrMsg] = useState<JSX.Element | null>(null);
  const [PINErrMsg, setPINErrMsg] = useState<JSX.Element | null>(null);
  const [fetchErrMsg, setFetchErrMsg] = useState<JSX.Element | null>(null);
  const [idTypeErrMsg, setIdTypeErrMsg] = useState<JSX.Element | null>(null);
  const [pinTypeErrMsg, setPinTypeErrMsg] = useState<JSX.Element | null>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      !surveyId ? setIDErrMsg(emptyInput) : null;
      !surveyPin ? setPINErrMsg(emptyInput) : null;
      surveyId.match(/[A-Z|a-z|ü|é]/i) ? setIdTypeErrMsg(incorrectType) : null;
      surveyPin.match(/[A-Z|a-z|ü|é]/i)
        ? setPinTypeErrMsg(incorrectType)
        : null;
      if (!surveyId || !surveyPin) return;
      dispatchLoading(true);
      const res = await axios.post("/survey/fetch", { surveyId, surveyPin });
      navigate(`/surveys-manager/save-survey/${res.data.survey._id}`);
      dispatchLoading(false);
    } catch (error) {
      setFetchErrMsg(fetchError);
    }
  };

  return (
    <ContentContainer>
      <Title title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <SubTitle title={t("chooseSurvey.surveyData")} />
          <Flex
            direction={"column"}
            gap={"15px"}
            style={{
              margin: "0 auto",
              maxWidth: "400px",
              paddingTop: "30px",
            }}>
            <FormContainer onSubmit={handleSubmit} gap={"15px"}>
              <Input
                label={t("common.surveyID")}
                name={surveyId}
                htmlFor={"survey-id"}
                error={
                  IDErrMsg
                    ? IDErrMsg
                    : idTypeErrMsg
                    ? idTypeErrMsg
                    : fetchErrMsg
                }
                inputErrorStyle={
                  IDErrMsg
                    ? IDErrMsg
                    : idTypeErrMsg
                    ? idTypeErrMsg
                    : fetchErrMsg
                }
                value={surveyId}
                onChange={(e) => {
                  setSurveyId(e.target.value);
                  setIDErrMsg(null);
                  setFetchErrMsg(null);
                  setIdTypeErrMsg(null);
                }}
              />
              <Input
                label={t("common.surveyPIN")}
                name={surveyPin}
                htmlFor={"survey-pin"}
                error={
                  PINErrMsg
                    ? PINErrMsg
                    : pinTypeErrMsg
                    ? pinTypeErrMsg
                    : fetchErrMsg
                }
                inputErrorStyle={
                  PINErrMsg
                    ? PINErrMsg
                    : pinTypeErrMsg
                    ? pinTypeErrMsg
                    : fetchErrMsg
                }
                value={surveyPin}
                onChange={(e) => {
                  setSurveyPin(e.target.value);
                  setPINErrMsg(null);
                  setFetchErrMsg(null);
                  setPinTypeErrMsg(null);
                }}
              />
              <Divider />
              <Flex direction={"column"} gap={"15px"}>
                <FormButton title={t("button.callUp")} />
                <BackButton path={"/surveys-manager/choose-action"} />
              </Flex>
            </FormContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default ChooseSurvey;
