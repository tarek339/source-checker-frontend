import { Typography } from "@mui/material";
import { TitleProps } from "../../types/interfaces/components";

const Title = ({ title, marginBottom, color, variant }: TitleProps) => {
  return (
    <Typography
      variant={variant ? variant : "h2"}
      style={{ marginBottom: marginBottom, color: color }}>
      {title}
    </Typography>
  );
};

export default Title;
