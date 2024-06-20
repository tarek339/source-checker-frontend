import { IoMdArrowRoundBack } from "react-icons/io";
import { useBreakPoints } from "../../hooks";
import { useState } from "react";

const Back = () => {
  const [hovered, setHovered] = useState(false);
  const { windowWidth } = useBreakPoints();
  return (
    <div
      style={{
        position: "relative",
      }}>
      <IoMdArrowRoundBack
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: windowWidth >= 1024 && hovered ? "#31e981" : "#fff",
          fontSize: "42px",
          cursor: "pointer",
        }}
      />
      {windowWidth >= 1024 && hovered ? (
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
          <span>back</span>
        </div>
      ) : null}
    </div>
  );
};

export default Back;
