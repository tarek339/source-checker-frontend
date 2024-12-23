import { IoIosCloseCircleOutline } from "react-icons/io";

interface IClose {
  size?: string | number;
  color?: string;
}

const Close = ({ size, color }: IClose) => {
  return <IoIosCloseCircleOutline color={color} size={size} />;
};

export default Close;
