import { IoMdArrowRoundBack } from "react-icons/io";
import { IIBack } from "../../types/interfaces/components";

const Back = ({ onClick, style, size }: IIBack) => {
  return (
    <IoMdArrowRoundBack
      size={size}
      cursor="pointer"
      onClick={onClick}
      color={"#17181d"}
      style={style}
    />
  );
};

export default Back;
