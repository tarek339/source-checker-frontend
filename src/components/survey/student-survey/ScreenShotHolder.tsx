import { colors } from "../../../assets/theme/colors";
import { ScreenShotHolderProps } from "../../../types/interfaces/components";
import Grid from "../../mui/Grid";

const ScreenShotHolder = ({ src }: ScreenShotHolderProps) => {
  return (
    <Grid column>
      <div
        style={{
          height: "80vh",
          overflowY: "scroll",
          zIndex: 1,
          backgroundColor: colors.background.main,
          boxShadow: colors.shadow.card,
        }}>
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src={src}
          alt=""
        />
      </div>
    </Grid>
  );
};

export default ScreenShotHolder;
