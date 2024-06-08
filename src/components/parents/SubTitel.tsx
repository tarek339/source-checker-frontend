import { ISubTitel } from "../../types/interfaces/components";

const SubTitel = ({ title }: ISubTitel) => {
  return <h2 style={{ padding: "0px 20px 20px 20px" }}>{title}</h2>;
};

export default SubTitel;
