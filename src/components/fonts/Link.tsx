import { ILink } from "../../types/interfaces/components";

const Link = ({ url, title, fontSize, fontWeight }: ILink) => {
  return (
    <a
      target="_blank"
      style={{
        textDecoration: "underline",
        fontWeight: fontWeight,
        fontSize: fontSize,
      }}
      href={url}>
      {title}
    </a>
  );
};

export default Link;
