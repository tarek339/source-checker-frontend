import { SurveyDataProp } from "../../../types/interfaces/interfaces";
import Grid from "../../mui/Grid";

import Text from "../../mui/Text";

const SurveyProp = ({ header, child, secondChild, filter }: SurveyDataProp) => {
  return (
    <Grid nowrap between width={"100%"} spacing={1} alignCenter>
      <div>
        <Text text={header} bold />
        <Text text={secondChild ?? ""} small />
      </div>
      <div style={{ filter: `blur(${filter}px)` }}>{child}</div>
    </Grid>
  );
};

export default SurveyProp;
