import { ICancelButton } from "../../types/interfaces/components";

const CancelButton = ({ onClick, title, style }: ICancelButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: "#ff0000",
        color: "#fff",
        borderColor: "transparent",
        borderRadius: "45px",
        padding: "6px 20px",
        cursor: "pointer",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
        fontSize: "18px",
        textTransform: "uppercase",
        fontWeight: 600,
        ...style,
      }}>
      {title}
    </button>
  );
};

export default CancelButton;
