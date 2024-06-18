import { useEffect, useState } from "react";
import {
  Card,
  Flex,
  FormButton,
  FramerMotion,
  Input,
  SubTitle,
  SurveyContent,
} from "../../components";
import { useBreakPoints, useDispatches, useTranslations } from "../../hooks";
import axios from "axios";
import FormContainer from "../../components/parents/form/FormContainer";

const StudenSurveyAuthentication = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const [surveyID, setSurveyID] = useState("");
  const { setMainPage } = useDispatches();

  const handleSubmit = async () => {
    try {
      await axios.post("/survey/students-survey", { surveyID });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMainPage(false);
  }, []);
  return (
    <SurveyContent>
      <SurveyContent maxWidth={900}>
        <Card>
          <FramerMotion>
            <SubTitle title={t("chooseSurvey.surveyData")} />
            <FormContainer
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              margin="0 auto"
              maxWidth={400}
              paddingTop="2em"
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
                <Flex
                  direction={"row"}
                  gap={""}
                  width="100%"
                  justify="flex-end">
                  <FormButton title={t("button.callUp")} />
                </Flex>
              ) : (
                <FormButton title={t("button.callUp")} />
              )}
            </FormContainer>
          </FramerMotion>
        </Card>
      </SurveyContent>
    </SurveyContent>
  );
};

export default StudenSurveyAuthentication;
