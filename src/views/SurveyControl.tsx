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
import { useNavigate, useParams } from "react-router-dom";
import { Back } from "../components/icons";

const SurveyControl = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey } = useSelectors();
  const { fetchSurvey } = useRequests();
  const { setCurrentPage } = useDispatches();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    socket.on("surveyPageNumber", (surveyInfo) => {
      if (id === surveyInfo.surveyId) {
        setCurrentPage(surveyInfo.pageNum);
      }
    });
  }, [id]);

  return (
    <FramerMotion>
      <ContentContainer
        maxWidth={1150}
        style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Flex direction={"row"} align="center">
          <Back
            style={{ paddingTop: "7px" }}
            onClick={() =>
              navigate(`/surveys-manager/add-pages/${survey?._id}`)
            }
          />
          <SubTitle
            style={{ fontSize: "31px" }}
            title={`${t("common.surveyID")}: ${survey?.surveyId}`}
          />
        </Flex>
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
