import { IContButton } from "../../types/interfaces/components";

const ContButton = ({ onClick, title }: IContButton) => {
  return (
    <button
      style={{
        backgroundColor: "#2835c3",
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
      }}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default ContButton;
