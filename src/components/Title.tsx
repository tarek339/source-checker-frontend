import { TitleProps } from "../types/interfaces/components";

const Title = ({ title, marginBottom, color }: TitleProps) => {
  return <h2 style={{ marginBottom: marginBottom, color: color }}>{title}</h2>;
};

export default Title;
