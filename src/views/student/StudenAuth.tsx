import { useEffect, useState } from "react";
import {
  Card,
  Flex,
  FormButton,
  Input,
  SubHeader,
  SurveyContent,
} from "../../components";
import { useBreakPoints, useDispatches, useTranslations } from "../../hooks";
import axios from "axios";
import FormContainer from "../../components/parents/form/FormContainer";

const StudenAuth = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const [surveyID, setSurveyID] = useState("");
  const { setMainPage } = useDispatches();

  const handleSubmit = async () => {
    try {
      await axios.post("/survey/students-survey", surveyID);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMainPage(false);
  }, []);
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
              label={t("common.surveyID")}
              name={"surveyID"}
              htmlFor={"surveyID"}
              error={null}
              inputErrorStyle={null}
              value={surveyID}
              onChange={(e) => setSurveyID(e.target.value)}
            />
            {windowWidth > 425 ? (
              <Flex direction={"row"} gap={""} width="100%" justify="flex-end">
                <FormButton title={t("common.callUp")} />
              </Flex>
            ) : (
              <FormButton title={t("common.callUp")} />
            )}
          </FormContainer>
        </Card>
      </div>
    </SurveyContent>
  );
};

export default StudenAuth;
