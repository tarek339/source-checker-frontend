import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useBreakPoints } from "../../hooks";

const SignOut = () => {
  const [hovered, setHovered] = useState(false);
  const { windowWidth } = useBreakPoints();
  return (
    <div
      style={{
        position: "relative",
      }}>
      <FaSignOutAlt
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: windowWidth >= 1024 && hovered ? "#31e981" : "#fff",
          fontSize: "36px",
          cursor: "pointer",
        }}
      />
      {windowWidth >= 1024 && hovered ? (
        <div
          style={{
            position: "absolute",
            top: 1,
            right: 50,
            zIndex: 1,
            backgroundColor: "#fff",
            color: "#2835c3",
            padding: "5px",
            borderRadius: "4px",
            fontWeight: 600,
          }}>
          <span>logout</span>
        </div>
      ) : null}
    </div>
  );
};

export default SignOut;
