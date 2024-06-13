import { useEffect } from "react";
import {
  Contorl,
  Flex,
  FramerMotion,
  Introduction,
  PageControl,
  SubHeader,
  SurveyContent,
  SurveyData,
  SurveyStatus,
} from "../components";
import {
  useBreakPoints,
  useRequests,
  useSelectors,
  useTranslations,
} from "../hooks";

const SurveyControl = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey } = useSelectors();
  const { fetchSurvey } = useRequests();

  useEffect(() => {
    fetchSurvey();
  }, []);

  return (
    <FramerMotion>
      <SurveyContent
        maxWidth={1150}
        style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <SubHeader
          style={{ fontSize: "31px" }}
          title={`${t("common.surveyID")}: ${survey?.surveyId}`}
        />
        <Flex
          direction={"column"}
          gap={"20px"}
          width="100%"
          style={{
            marginTop: "1em",
          }}>
          <Flex direction={windowWidth < 768 ? "column" : "row"} gap={"20px"}>
            <Introduction />
            <SurveyData />
          </Flex>
          <Flex direction={windowWidth < 768 ? "column" : "row"} gap={"20px"}>
            <Contorl />
            <PageControl />
            <SurveyStatus />
          </Flex>
        </Flex>
      </SurveyContent>
    </FramerMotion>
  );
};

export default SurveyControl;
