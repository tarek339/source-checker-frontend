import { ISubTitle } from "../../types/interfaces/components";

const SubTitle = ({ title, style }: ISubTitle) => {
  return <h3 style={{ ...style }}>{title}</h3>;
};

export default SubTitle;
