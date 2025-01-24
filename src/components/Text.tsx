import { TextProps } from "../types/interfaces/components";

const Text = ({
  text,
  bold,
  color,
  pointer,
  underline,
  small,
  uppercase,
  center,
  style,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: TextProps) => {
  return (
    <p
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        color: color,
        cursor: pointer ? "pointer" : "default",
        textDecoration: underline ? "underline" : "none",
        fontSize: small ? "16px" : "18px",
        textTransform: uppercase ? "uppercase" : "none",
        textAlign: center ? "center" : "left",
        fontWeight: bold ? 600 : 400,
        ...style,
      }}>
      {text}
    </p>
  );
};

export default Text;
