import { useBreakPoints } from "../../../hooks";
import { ISection } from "../../../types/interfaces/components";

const Section = ({
  text,
  color,
  minWidth,
  maxWidth,
  width,
  style,
}: ISection) => {
  const { windowWidth } = useBreakPoints();
  return (
    <div
      style={{
        fontSize: "22px",
        fontWeight: 600,
        color: color,
        minWidth: minWidth,
        maxWidth: maxWidth,
        width: width,
        paddingTop: windowWidth >= 470 ? "12px" : "0px",
        ...style,
      }}>
      {text}
    </div>
  );
};

export default Section;
