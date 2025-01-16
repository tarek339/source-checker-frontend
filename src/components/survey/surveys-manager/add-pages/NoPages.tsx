import { useTranslations } from "../../../../hooks";
import SubTitle from "../../../mui/SubTitle";
import Text from "../../../mui/Text";
import Grid from "../../../mui/Grid";
import { colors } from "../../../../assets/theme/colors";

const NoPages = () => {
  const { t } = useTranslations();

  return (
    <Grid
      column
      padding
      style={{
        textAlign: "center",
        border: `1.5px solid ${colors.border.info}`,
        backgroundColor: colors.background.info,
      }}>
      <SubTitle
        title={t("addPages.notiHeader")}
        center
        color={colors.primary.main}
      />
      <Text text={t("addPages.notiText")} center color={colors.primary.main} />
    </Grid>
  );
};

export default NoPages;
