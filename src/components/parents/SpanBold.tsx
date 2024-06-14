import { ISpanBold } from "../../types/interfaces/components";

const SpanBold = ({
  title,
  onClick,
  style,
  onMouseEnter,
  onMouseLeave,
}: ISpanBold) => {
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ fontWeight: 600, ...style }}>
      {title}
    </span>
  );
};

export default SpanBold;
