import { useBreakPoints } from "../../../hooks";
import { ISectionChild } from "../../../types/interfaces/components";

const SectionChild = ({
  text,
  color,
  minWidth,
  maxWidth,
  width,
  style,
}: ISectionChild) => {
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

export default SectionChild;
