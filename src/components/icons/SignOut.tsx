import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

const SignOut = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <FaSignOutAlt
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "#31e981" : "#fff",
        fontSize: "36px",
        cursor: "pointer",
      }}
    />
  );
};

export default SignOut;
