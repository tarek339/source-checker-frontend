import { Typography } from "@mui/material";
import { SubTitleProps } from "../../types/interfaces/components";

const SubTitle = ({
  title,
  color,
  marginBottom,
  center,
  marginTop,
  small,
}: SubTitleProps) => {
  return (
    <Typography
      variant="h3"
      style={{
        color: color,
        marginBottom: marginBottom,
        marginTop: marginTop,
        textAlign: center ? "center" : "left",
        fontSize: small ? "18px" : "",
      }}>
      {title}
    </Typography>
  );
};

export default SubTitle;
