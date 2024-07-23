import { FaRegCopy } from "react-icons/fa";

export interface ICopy {
  color: string;
}

const Copy = ({ color }: ICopy) => {
  return <FaRegCopy color={color} fontSize="20px" />;
};

export default Copy;
