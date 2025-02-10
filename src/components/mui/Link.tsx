import { Link } from "@mui/material";
import { BasicLinkProps } from "../../types/interfaces/components";
import { colors } from "../../assets/theme/colors";

const BasicLink = ({ href, title, bold, mail, small, xs }: BasicLinkProps) => {
  return (
    <Link
      variant="body1"
      underline="none"
      fontWeight={bold ? 600 : 400}
      target={mail ? "_self" : "_blank"}
      sx={{
        "&.MuiLink-root": {
          color: colors.primary.main,
          fontSize: small ? "16px" : xs ? "12px" : "18px",
          "&:hover": {
            color: colors.primary.hover,
            textDecoration: "underline",
          },
        },
      }}
      href={mail ? `mailto:${href}` : href}>
      {title || href}
    </Link>
  );
};

export default BasicLink;
