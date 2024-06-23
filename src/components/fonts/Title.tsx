import { ITitle } from "../../types/interfaces/components";

const Title = ({ title, style }: ITitle) => {
  return <h2 style={{ padding: "0px 20px 20px 20px", ...style }}>{title}</h2>;
};

export default Title;
