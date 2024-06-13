import { ISpanBold } from "../../types/interfaces/components";

const SpanBold = ({ title }: ISpanBold) => {
  return <span style={{ fontWeight: 600 }}>{title}</span>;
};

export default SpanBold;
