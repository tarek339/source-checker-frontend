import { FaCircleDot } from "react-icons/fa6";
import { useTranslations } from "../../../hooks";
import Grid from "../../mui/Grid";
import Text from "../../mui/Text";
import SubTitle from "../../mui/SubTitle";
import { colors } from "../../../assets/theme/colors";

const RatingInfo = () => {
  const { t } = useTranslations();
  return (
    <Grid
      spacing={1}
      nowrap
      style={{
        border: `1.5px solid ${colors.border.info}`,
        backgroundColor: colors.background.info,
      }}>
      <div style={{ padding: "15px 0px 0px 10px" }}>
        <FaCircleDot color={colors.primary.main} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "10px 10px 10px 0px",
        }}>
        <SubTitle title={"Bewertung"} small color={colors.primary.main} />
        <Text
          text={t("newSurvey.ratingText")}
          color={colors.primary.main}
          small
        />
      </div>
    </Grid>
  );
};

export default RatingInfo;
