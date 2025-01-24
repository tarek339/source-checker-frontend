import { useState } from "react";
import {
  Card,
  Form,
  FramerMotion,
  SubTitle,
  Title,
  Button,
  Grid,
  Input,
} from "../../components";
import { useTranslations, useDispatches } from "../../hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import withUnAuthPages from "../../hoc/withUnAuthPages";

const LogInSurvey = () => {
  const { t } = useTranslations();
  const { dispatchLoading, dispatchSurvey, dispatchPages } = useDispatches();
  const navigate = useNavigate();

  const [surveyId, setSurveyId] = useState("");
  const [surveyPin, setSurveyPin] = useState("");

  const [idError, setIdError] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [pinErrorMessage, setPinErrorMessage] = useState("");
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!surveyId) {
        setIdError(true);
        setIdErrorMessage("Pflichtfeld");
        return;
      }
      if (!surveyPin) {
        setPinError(true);
        setPinErrorMessage("Pflichtfeld");
        return;
      }
      if (surveyId.match(/[A-Z|a-z|ü|é]/i)) {
        setIdError(true);
        setIdErrorMessage("Ungültige Eingabe - nur Zahlen erlaubt");
        return;
      }
      if (surveyPin.match(/[A-Z|a-z|ü|é]/i)) {
        setPinError(true);
        setPinErrorMessage("Ungültige Eingabe - nur Zahlen erlaubt");
        return;
      }

      dispatchLoading(true);
      const res = await axios.post("/survey/log-in-survey", {
        surveyId,
        surveyPin,
      });
      dispatchSurvey(res.data.survey);
      dispatchPages(res.data.survey.pages);
      sessionStorage.setItem("token", res.data.token);
      navigate(`/surveys-manager/survey-profile/${res.data.survey._id}`);
      dispatchLoading(false);
    } catch (error) {
      setIdError(true);
      setPinError(true);
      if (axios.isAxiosError(error) && error.response) {
        setFetchErrorMessage(error.response.data.errorMessage);
      }
      console.log((error as Error).message);
    }
  };

  return (
    <FramerMotion>
      <Grid column gutters>
        <Title title={t("survey.createManagement")} />

        <Card>
          <Grid column maxWidth={400}>
            <SubTitle title={"Umfragedaten eingeben"} />
            <Form onSubmit={handleSubmit}>
              <Input
                htmlFor={"id"}
                label={`${t("common.surveyID")}*`}
                palceholder="123456"
                error={idError}
                value={surveyId}
                onChange={(e) => {
                  setSurveyId(e.target.value);
                  setIdError(false);
                  setIdErrorMessage("");
                  setFetchErrorMessage("");
                }}
                onClear={() => {
                  setSurveyId("");
                  setIdError(false);
                  setIdErrorMessage("");
                  setFetchErrorMessage("");
                }}
                errorMessage={idErrorMessage || fetchErrorMessage}
              />
              <Input
                htmlFor={"pin"}
                label={`${t("common.surveyPIN")}*`}
                palceholder="123456"
                type="password"
                error={pinError}
                value={surveyPin}
                onChange={(e) => {
                  setSurveyPin(e.target.value);
                  setPinError(false);
                  setPinErrorMessage("");
                  setFetchErrorMessage("");
                }}
                onClear={() => {
                  setSurveyPin("");
                  setPinError(false);
                  setPinErrorMessage("");
                  setFetchErrorMessage("");
                }}
                errorMessage={pinErrorMessage || fetchErrorMessage}
              />

              <Grid column width={"100%"} spacing={1}>
                <Button type="submit" title={t("button.callUp")} />
                <Button
                  error
                  onClick={() => navigate("/surveys-manager/authentication")}
                  title={t("button.back")}
                />
              </Grid>
            </Form>
          </Grid>
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default withUnAuthPages(LogInSurvey);
