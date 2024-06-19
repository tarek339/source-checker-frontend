import { ISection } from "../../types/interfaces/views";

const Section = ({ text, color, minWidth, maxWidth }: ISection) => {
  return (
    <span
      style={{
        fontSize: "22px",
        fontWeight: 600,
        color: color,
        minWidth: minWidth,
        maxWidth: maxWidth,
      }}>
      {text}
    </span>
  );
};

export default Section;
