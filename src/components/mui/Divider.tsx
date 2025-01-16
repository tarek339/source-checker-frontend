import { Divider } from "@mui/material";
import { BasicDividerProps } from "../../types/interfaces/components";

const BasicDivider = ({ borderWidth }: BasicDividerProps) => {
  return <Divider style={{ borderWidth: !borderWidth ? 1 : borderWidth }} />;
};

export default BasicDivider;
