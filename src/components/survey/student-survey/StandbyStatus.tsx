import { useSelectors, useTranslations } from "../../../hooks";
import { Card, FramerMotion, Grid, SubTitle, Text } from "../..";
import { colors } from "../../../assets/theme/colors";

const StandbyStatus = () => {
  const { t } = useTranslations();
  const { student, survey } = useSelectors();

  const user = survey?.freeUserNames
    ? student?.freeUserName
    : `User ${student?.userNumber}`;

  const slicedUser = user ? user.slice(1) : undefined;

  return (
    <FramerMotion>
      <Grid column width={"100%"}>
        <Card>
          <Grid column width={"100%"}>
            <SubTitle
              title={`${t("common.hello")} ${
                user?.charAt(0).toUpperCase() + slicedUser!
              }, ${t("studentSurvey.welcome")}`}
            />
            <div>
              <Text text={t("surveyControl.introText.first")} />
              <Text text={t("surveyControl.introText.second")} />
              <Text text={t("surveyControl.introText.third")} />
              <Text text={t("surveyControl.introText.fourth")} />
            </div>

            <SubTitle
              title={t("studentSurvey.notStartedInfo")}
              color={colors.desctructed.main}
              center
            />
          </Grid>
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default StandbyStatus;
