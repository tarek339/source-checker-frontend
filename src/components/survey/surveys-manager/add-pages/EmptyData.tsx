import { colors } from "../../../../assets/theme/colors";
import { EmptyDataProps } from "../../../../types/interfaces/components";
import Grid from "../../../mui/Grid";
import Text from "../../../mui/Text";

const EmptyData = ({ title, width, height }: EmptyDataProps) => {
  return (
    <Grid
      alignCenter
      center
      noMargin
      gutters
      style={{
        width: width,
        height: height,
        border: `3px dashed ${colors.border.secondary}`,
      }}>
      <Text text={title} center />
    </Grid>
  );
};

export default EmptyData;
