import { IoAddOutline } from "react-icons/io5";

interface AddProps {
  fontSize: string;
  color: string;
}

const Add = ({ fontSize, color }: AddProps) => {
  return <IoAddOutline fontSize={fontSize} color={color} />;
};

export default Add;
