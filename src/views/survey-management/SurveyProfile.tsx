import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../hooks";
import {
  Card,
  FramerMotion,
  SubTitle,
  SurveyProfileData,
  Title,
  Button,
  RatingInfo,
  Grid,
} from "../../components";
import { useNavigate } from "react-router-dom";
import withSurveyAuthPages from "../../hoc/withSurveyAuthPages";
import DeleteSurveyModal from "../../components/survey/surveys-manager/DeleteSurveyModal";

const SurveyProfile = () => {
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { openModal } = useDispatches();
  const { windowWidth } = useBreakPoints();

  const navigate = useNavigate();

  return (
    <FramerMotion>
      <DeleteSurveyModal />

      <Grid column gutters>
        <Title title={t("survey.createManagement")} />
        <Card>
          <Grid column>
            <SubTitle title={t("saveSurvey.saveSurvey")} />
            <RatingInfo />
            <SurveyProfileData />

            <div style={{ marginTop: 10 }}>
              <Grid
                width={"100%"}
                between
                direction={windowWidth <= 500 ? "column-reverse" : "row"}>
                <Button error onClick={openModal} title={t("button.delete")} />
                <Button
                  onClick={() =>
                    navigate(`/surveys-manager/pages-overview/${survey?._id}`)
                  }
                  title={t("button.continue")}
                />
              </Grid>
            </div>
          </Grid>
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default withSurveyAuthPages(SurveyProfile);
