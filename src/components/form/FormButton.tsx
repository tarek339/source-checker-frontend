import { useState } from "react";
import { useSelectors } from "../../hooks";
import { IFormButton } from "../../types/interfaces/components";

const FormButton = ({ title, style }: IFormButton) => {
  const { loading } = useSelectors();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      disabled={loading ? true : false}
      type="submit"
      style={{
        ...style,
        boxShadow: loading
          ? ""
          : "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
        backgroundColor:
          isHovered && !loading ? "#1420ae" : loading ? "#2834c2" : "#2834c2",
        color: "#fff",
        borderColor: "transparent",
        borderRadius: "45px",
        padding: "6px 12px",
        cursor: loading ? "default" : "pointer",
        fontSize: "18px",
        textTransform: "uppercase",
        fontWeight: 600,
        transition: "background-color 0.3s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {title}
    </button>
  );
};

export default FormButton;
