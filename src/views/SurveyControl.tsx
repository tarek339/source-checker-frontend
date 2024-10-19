import { useEffect } from "react";
import {
  Contorl,
  Flex,
  FramerMotion,
  CurrentPage,
  SubTitle,
  ContentContainer,
  SurveyStatus,
} from "../components";
import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../hooks";
import { socket } from "../socket";
import { useParams } from "react-router-dom";

const SurveyControl = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey } = useSelectors();
  const { fetchSurvey } = useRequests();
  const { setCurrentPage } = useDispatches();
  const { id } = useParams();

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    socket.on("surveyPageNumber", (surveyInfo) => {
      if (id === surveyInfo.surveyId) {
        setCurrentPage(surveyInfo.pageNum);
      }
    });
  }, []);

  return (
    <FramerMotion>
      <ContentContainer
        maxWidth={1150}
        style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <SubTitle
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
          <CurrentPage />
          <Flex direction={windowWidth < 880 ? "column" : "row"} gap={"20px"}>
            <Contorl />
            <SurveyStatus />
          </Flex>
        </Flex>
      </ContentContainer>
    </FramerMotion>
  );
};

export default SurveyControl;
