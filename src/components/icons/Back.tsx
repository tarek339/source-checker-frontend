import { IoMdArrowRoundBack } from "react-icons/io";
import { IIBack } from "../../types/interfaces/components";

const Back = ({ onClick, style }: IIBack) => {
  return (
    <div
      style={{
        position: "relative",
      }}>
      <IoMdArrowRoundBack
        fontSize="48px"
        cursor="pointer"
        onClick={onClick}
        color={"#17181d"}
        style={style}
      />
    </div>
  );
};

export default Back;
