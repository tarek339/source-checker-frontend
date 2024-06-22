import { ISection } from "../../../types/interfaces/components";

const Section = ({
  text,
  color,
  minWidth,
  maxWidth,
  width,
  style,
}: ISection) => {
  return (
    <div
      style={{
        fontSize: "22px",
        fontWeight: 600,
        color: color,
        minWidth: minWidth,
        maxWidth: maxWidth,
        width: width,
        ...style,
      }}>
      <>{text}</>
    </div>
  );
};

export default Section;
