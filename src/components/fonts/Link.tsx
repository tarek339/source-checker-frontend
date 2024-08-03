import { ILink } from "../../types/interfaces/components";

const Link = ({ url, title, fontSize, fontWeight, color }: ILink) => {
  return (
    <a
      target="_blank"
      style={{
        textDecoration: "underline",
        fontWeight: fontWeight,
        fontSize: fontSize,
        color: color,
      }}
      href={url}>
      {title}
    </a>
  );
};

export default Link;
