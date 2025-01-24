import { Typography } from "@mui/material";
import { TextProps } from "../../types/interfaces/components";

const Text = ({
  text,
  bold,
  color,
  pointer,
  underline,
  small,
  uppercase,
  center,
  body2,
  style,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: TextProps) => {
  return (
    <Typography
      variant={body2 ? "body2" : "body1"}
      fontWeight={bold ? 600 : ""}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        color: color,
        cursor: pointer ? "pointer" : "default",
        textDecoration: underline ? "underline" : "none",
        fontSize: small ? "16px" : "",
        textTransform: uppercase ? "uppercase" : "none",
        textAlign: center ? "center" : "left",
        ...style,
      }}>
      {text}
    </Typography>
  );
};

export default Text;
