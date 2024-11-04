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
        style={style}
      />
      {/* {windowWidth >= 1024 && hovered ? (
        <div
          style={{
            position: "absolute",
            top: 3,
            right: 50,
            backgroundColor: "#fff",
            color: "#2835c3",
            padding: "5px",
            borderRadius: "4px",
            fontWeight: 600,
          }}>
          <span onClick={onClick}>{t("button.back").toUpperCase()}</span>
        </div>
      ) : null} */}
    </div>
  );
};

export default Back;
