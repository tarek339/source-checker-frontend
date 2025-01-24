import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  FramerMotion,
  Grid,
  SubTitle,
  Input,
  Title,
} from "../../components";
import { useDispatches, useSelectors, useTranslations } from "../../hooks";

const StudentRegister = () => {
  const { t } = useTranslations();
  const { dispatchStudent, dispatchSurvey, discardSurvey } = useDispatches();
  const { survey } = useSelectors();
  const navigate = useNavigate();
  const { id } = useParams();

  const [freeUserName, setFreeUserName] = useState("");
  const [inputError, setInputError] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");

  const fetchSurvey = async () => {
    try {
      const res = await axios.get(`/student/fetch-students-survey/${id}`);
      dispatchSurvey(res.data.survey);
    } catch (error) {
      discardSurvey();
      console.error((error as Error).message);
    }
  };

  useEffect(() => {
    fetchSurvey();
  }, []);

  const handleSubmit = async () => {
    try {
      if (!freeUserName && survey?.freeUserNames === true) {
        setInputError(true);
        setUserNameError("Pflichtfeld");
        return false;
      }
      const res = await axios.post("/student/register-student", {
        freeUserName: !survey?.freeUserNames ? "" : freeUserName,
        surveyId: survey?._id,
      });
      sessionStorage.setItem("student-token", res.data.token);
      dispatchStudent(res.data.student);
      setFreeUserName("");
      navigate(
        `/student-survey/${survey?._id}/student-id/${res.data.student._id}`
      );
    } catch (error) {
      setInputError(true);
      if (axios.isAxiosError(error) && error.response) {
        setFetchErrorMessage(error.response.data.errorMessage);
      }
      console.log((error as Error).message);
    }
  };

  useEffect(() => {
    if (
      survey?.freeUserNames === false &&
      survey?.freeUserNames !== undefined
    ) {
      handleSubmit();
    }
  }, [survey]);

  useEffect(() => {
    console.log(survey?.freeUserNames);
  }, [survey]);

  return (
    <FramerMotion>
      <Grid column gutters>
        <Title title={"Registrieren"} />
        <Card>
          <Grid column maxWidth={400}>
            <SubTitle title={"Username vergeben"} />
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
              <Input
                htmlFor={"surveyID"}
                label={`Username eingeben*`}
                palceholder="Max Mustermann"
                error={inputError}
                value={freeUserName}
                onChange={(e) => {
                  setFreeUserName(e.target.value);
                  setInputError(false);
                  setUserNameError("");
                  setFetchErrorMessage("");
                }}
                onClear={() => {
                  setFreeUserName("");
                  setInputError(false);
                  setUserNameError("");
                  setFetchErrorMessage("");
                }}
                errorMessage={userNameError || fetchErrorMessage}
              />

              <Button fullWidth type="submit" title={t("button.register")} />
            </Form>
          </Grid>
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default StudentRegister;
