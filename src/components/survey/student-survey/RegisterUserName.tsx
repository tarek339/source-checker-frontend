import axios from "axios";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import FormContainer from "../../form/FormContainer";
import Input from "../../form/Input";
import {
  useBreakPoints,
  useDispatches,
  useInputErrors,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../..";

const RegisterUserName = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { dispatchStudent, dispatchSurvey, discardSurvey } = useDispatches();
  const { survey } = useSelectors();
  const { emptyInput, studentExists } = useInputErrors();
  const navigate = useNavigate();
  const { id } = useParams();

  const [freeUserName, setFreeUserName] = useState("");
  const [inputError, setInputError] = useState<JSX.Element | null>(null);
  const [userExistsMsg, setUserExistsMsg] = useState<JSX.Element | null>(null);

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
      if (!freeUserName && survey?.freeUserNames) {
        setInputError(emptyInput);
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
      setUserExistsMsg(studentExists);
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

  return (
    <>
      <SubTitle title={t("chooseSurvey.surveyData")} />
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          paddingTop: "2em",
        }}
        gap={"20px"}>
        <Input
          label={`${t("common.freeName")}*`}
          name={"surveyID"}
          htmlFor={"surveyID"}
          placeHolder="Max Musterman"
          error={inputError ? inputError : userExistsMsg}
          hasError={inputError ? inputError : userExistsMsg}
          value={freeUserName}
          onChange={(e) => {
            setFreeUserName(e.target.value);
            setUserExistsMsg(null);
            setInputError(null);
          }}
        />
        {windowWidth > 425 ? (
          <Flex direction={"row"} width="100%" justify="flex-end">
            <Button type="submit" title={t("button.register")} />
          </Flex>
        ) : (
          <Button type="submit" title={t("button.register")} />
        )}
      </FormContainer>
    </>
  );
};

export default RegisterUserName;
