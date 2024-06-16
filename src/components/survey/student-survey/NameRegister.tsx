import axios from "axios";
import SubHeader from "../../parents/SubHeader";
import Card from "../../parents/containers/Card";
import Flex from "../../parents/containers/Flex";
import SurveyContent from "../../parents/containers/SurveyContent";
import FormButton from "../../parents/form/FormButton";
import FormContainer from "../../parents/form/FormContainer";
import Input from "../../parents/form/Input";
import {
  useBreakPoints,
  useDispatches,
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
  const [freeUserName, setFreeUserName] = useState("");

  useEffect(() => {
    fetchSurvey();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/student/register-free-user-name", {
        freeUserName,
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
    <SurveyContent>
      <div style={{ margin: "0 auto", maxWidth: "900px" }}>
        <Card>
          <SubHeader title={t("chooseSurvey.surveyData")} />
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
              error={null}
              inputErrorStyle={null}
              value={freeUserName}
              onChange={(e) => setFreeUserName(e.target.value)}
            />
            {windowWidth > 425 ? (
              <Flex direction={"row"} gap={""} width="100%" justify="flex-end">
                <FormButton title={t("common.register")} />
              </Flex>
            ) : (
              <FormButton title={t("common.register")} />
            )}
          </FormContainer>
        </Card>
      </div>
    </SurveyContent>
  );
};

export default NameRegister;
