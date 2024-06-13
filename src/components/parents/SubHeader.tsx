import { ISubHeader } from "../../types/interfaces/components";

const SubHeader = ({ title, style }: ISubHeader) => {
  return <h3 style={{ ...style }}>{title}</h3>;
};

export default SubHeader;
