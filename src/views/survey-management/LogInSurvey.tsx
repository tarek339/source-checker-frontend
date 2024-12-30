import { useState } from "react";
import {
  Card,
  Divider,
  Flex,
  FormContainer,
  FramerMotion,
  Input,
  SubTitle,
  Title,
  ContentContainer,
  Button,
} from "../../components";
import { useTranslations, useInputErrors, useDispatches } from "../../hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import withUnAuthPages from "../../hoc/withUnAuthPages";

const LogInSurvey = () => {
  const { t } = useTranslations();
  const { emptyInput, incorrectType, fetchError } = useInputErrors();
  const { dispatchLoading, dispatchSurvey } = useDispatches();
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
      const res = await axios.post("/survey/log-in-survey", {
        surveyId,
        surveyPin,
      });
      dispatchSurvey(res.data.survey);
      sessionStorage.setItem("token", res.data.token);
      navigate(`/surveys-manager/survey-profile/${res.data.survey._id}`);
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
                label={`${t("common.surveyID")}*`}
                name={surveyId}
                htmlFor={"survey-id"}
                placeHolder="z. Bsp. 1234..."
                error={
                  IDErrMsg
                    ? IDErrMsg
                    : idTypeErrMsg
                    ? idTypeErrMsg
                    : fetchErrMsg
                }
                hasError={
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
                onClear={() => {
                  setSurveyId("");
                  setIDErrMsg(null);
                  setFetchErrMsg(null);
                  setIdTypeErrMsg(null);
                }}
              />
              <Input
                type="password"
                label={`${t("common.surveyPIN")}*`}
                name={surveyPin}
                htmlFor={"survey-pin"}
                placeHolder="z. Bsp. 1234..."
                error={
                  PINErrMsg
                    ? PINErrMsg
                    : pinTypeErrMsg
                    ? pinTypeErrMsg
                    : fetchErrMsg
                }
                hasError={
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
                onClear={() => {
                  setSurveyPin("");
                  setPINErrMsg(null);
                  setFetchErrMsg(null);
                  setPinTypeErrMsg(null);
                }}
              />
              <Divider />
              <Flex direction={"column"} gap={"15px"}>
                <Button type="submit" title={t("button.callUp")} />
                <Button
                  error
                  onClick={() => navigate(-1)}
                  title={t("button.back")}
                />
              </Flex>
            </FormContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default withUnAuthPages(LogInSurvey);
