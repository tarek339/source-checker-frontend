import { ISpan } from "../../types/interfaces/components";
import Flex from "../containers/Flex";

const Span = ({
  title,
  onClick,
  style,
  onMouseEnter,
  onMouseLeave,
  fontSize,
  fontWeight,
  color,
  textDecoration,
  cursor,
  icon,
}: ISpan) => {
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        fontWeight: fontWeight,
        fontSize: `${fontSize}px`,
        color: color,
        textDecoration: textDecoration,
        cursor: cursor,
        ...style,
      }}>
      <Flex direction={"row"} gap={"2px"} align="center">
        <>
          {icon}
          {title}
        </>
      </Flex>
    </span>
  );
};

export default Span;
