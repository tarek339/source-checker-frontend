import { ISection } from "../../../types/interfaces/components";

const Section = ({ text, color, minWidth, maxWidth, width }: ISection) => {
  return (
    <span
      style={{
        fontSize: "22px",
        fontWeight: 600,
        color: color,
        minWidth: minWidth,
        maxWidth: maxWidth,
        width: width,
      }}>
      {text}
    </span>
  );
};

export default Section;
