import { ILinkButton } from "../../types/interfaces/components";

const LinkButton = ({ url, title }: ILinkButton) => {
  return (
    <a
      href={url}
      target="_blank"
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
    </a>
  );
};

export default LinkButton;
