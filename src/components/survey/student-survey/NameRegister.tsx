import axios from "axios";
import SubTitle from "../../parents/SubTitle";
import Card from "../../parents/containers/Card";
import Flex from "../../parents/containers/Flex";
import ContentContainer from "../../parents/containers/ContentContainer";
import FormButton from "../../parents/form/FormButton";
import FormContainer from "../../parents/form/FormContainer";
import Input from "../../parents/form/Input";
import {
  useBreakPoints,
  useDispatches,
  useInputErrors,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NameRegister = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { dispatchStudent } = useDispatches();
  const { survey } = useSelectors();
  const navigate = useNavigate();
  const { fetchSurvey, fetchStudents } = useRequests();
  const { emptyInput } = useInputErrors();

  const [freeUserName, setFreeUserName] = useState("");
  const [inputError, setInputError] = useState<JSX.Element | null>(null);

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    if (
      survey?.freeUserNames === false &&
      survey?.freeUserNames !== undefined
    ) {
      handleSubmit();
    }
  }, [survey]);

  const handleSubmit = async () => {
    try {
      if (!freeUserName && survey?.freeUserNames) {
        setInputError(emptyInput);
        return false;
      }
      const res = await axios.post("/student/register-free-user-name", {
        freeUserName: !survey?.freeUserNames ? "" : freeUserName,
        surveyId: survey?._id,
      });
      dispatchStudent(res.data.student);
      await fetchStudents();
      setFreeUserName("");
      navigate(
        `/student-survey/${survey?._id}/student-id/${res.data.student._id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentContainer>
      <div style={{ margin: "0 auto", maxWidth: "900px" }}>
        <Card>
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
              label={t("common.freeName")}
              name={"surveyID"}
              htmlFor={"surveyID"}
              error={inputError}
              inputErrorStyle={inputError}
              value={freeUserName}
              onChange={(e) => setFreeUserName(e.target.value)}
            />
            {windowWidth > 425 ? (
              <Flex direction={"row"} gap={""} width="100%" justify="flex-end">
                <FormButton title={t("button.register")} />
              </Flex>
            ) : (
              <FormButton title={t("button.register")} />
            )}
          </FormContainer>
        </Card>
      </div>
    </ContentContainer>
  );
};

export default NameRegister;
