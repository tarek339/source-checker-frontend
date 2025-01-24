import { IIBack } from "../../types/interfaces/components";
import { IoArrowBackSharp } from "react-icons/io5";
const Back = ({ onClick, style, size }: IIBack) => {
  return (
    <IoArrowBackSharp
      size={size}
      cursor="pointer"
      onClick={onClick}
      color={"#17181d"}
      style={style}
    />
  );
};

export default Back;
