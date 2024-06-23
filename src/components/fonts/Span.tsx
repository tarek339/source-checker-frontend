import { ISpan } from "../types/interfaces/components";

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
      {title}
    </span>
  );
};

export default Span;
