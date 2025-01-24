import { useState } from "react";
import {
  Card,
  FramerMotion,
  SubTitle,
  Form,
  Button,
  Grid,
  Input,
} from "../../components";
import { useDispatches, useTranslations } from "../../hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentSurveyAuth = () => {
  const { t } = useTranslations();
  const [surveyId, setSurveyId] = useState("");
  const { dispatchSurvey } = useDispatches();
  const navigate = useNavigate();

  const [idError, setIdError] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!surveyId) {
        setIdError(true);
        setIdErrorMessage("Pflichtfeld");
        return;
      }
      if (surveyId.match(/[A-Z|a-z|ü|é]/i)) {
        setIdError(true);
        setIdErrorMessage("Ungültige Eingabe - nur Zahlen erlaubt");
        return;
      }

      const res = await axios.post("/student/student-join-survey", {
        surveyId,
      });
      dispatchSurvey(res.data.survey);
      if (res.data.survey) {
        navigate(`/register-student/${res.data.survey._id}`);
      }
    } catch (error) {
      setIdError(true);
      if (axios.isAxiosError(error) && error.response) {
        setFetchErrorMessage(error.response.data.errorMessage);
      }
      console.log((error as Error).message);
    }
  };

  return (
    <FramerMotion>
      <Grid column gutters>
        <SubTitle title={t("studentSurvey.joinSurvey")} />
        <Card>
          <Grid column maxWidth={400}>
            <Form onSubmit={handleSubmit}>
              <Input
                htmlFor={"surveyID"}
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
              <Button fullWidth type="submit" title={t("button.register")} />
            </Form>
          </Grid>
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default StudentSurveyAuth;
