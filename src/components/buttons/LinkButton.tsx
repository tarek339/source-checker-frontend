import { ILinkButton } from "../../types/interfaces/components";

const LinkButton = ({ onClick, title }: ILinkButton) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#31e981",
        color: "#2835c3",
        height: "37px",
        borderColor: "transparent",
        borderRadius: "45px",
        padding: "6px 20px",
        cursor: "pointer",
        fontSize: "18px",
        textTransform: "uppercase",
        fontWeight: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {title}
    </button>
  );
};

export default LinkButton;
