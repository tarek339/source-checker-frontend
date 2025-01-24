import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FramerMotion,
  CurrentPage,
  Contorl,
  SurveyStatus,
  Grid,
  Title,
} from "../../components";
import { Back } from "../../components/icons";
import {
  useTranslations,
  useBreakPoints,
  useSelectors,
  useDispatches,
} from "../../hooks";
import { socket } from "../../socket";
import withSurveyAuthPages from "../../hoc/withSurveyAuthPages";

const SurveyControl = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey } = useSelectors();
  const { setCurrentPage } = useDispatches();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("surveyPageNumber", (surveyInfo) => {
      if (id === surveyInfo.surveyId) {
        setCurrentPage(surveyInfo.pageNum);
      }
    });
  }, [id]);

  return (
    <FramerMotion>
      <Grid column gutters>
        <Grid flexStart alignCenter width={"100%"} spacing={1}>
          <Back
            size={40}
            onClick={() =>
              navigate(`/surveys-manager/pages-overview/${survey?._id}`)
            }
          />
          <Title title={`${t("common.surveyID")}: ${survey?.surveyId}`} />
        </Grid>

        <CurrentPage />
        <Grid
          width={"100%"}
          direction={windowWidth < 890 ? "column" : "row"}
          nowrap>
          <Contorl />
          <SurveyStatus />
        </Grid>
      </Grid>
    </FramerMotion>
  );
};

export default withSurveyAuthPages(SurveyControl);
