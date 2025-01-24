import { SubTitleProps } from "../types/interfaces/components";

const SubTitle = ({
  title,
  style,
  marginBottom,
  marginTop,
  center,
  color,
}: SubTitleProps) => {
  return (
    <h3
      style={{
        ...style,
        marginBottom: marginBottom,
        marginTop: marginTop,
        textAlign: center ? "center" : "left",
        color: color,
      }}>
      {title}
    </h3>
  );
};

export default SubTitle;
