import { List } from "@mui/material";
import { UlListProps } from "../../types/interfaces/components";

const UlList = ({ children }: UlListProps) => {
  return <List>{children}</List>;
};

export default UlList;
