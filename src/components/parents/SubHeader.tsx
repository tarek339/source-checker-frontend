import { ISubHeader } from "../../types/interfaces/components";

const SubHeader = ({ title }: ISubHeader) => {
  return <h3>{title}</h3>;
};

export default SubHeader;
