import { Card } from "@mui/material";
import { BasicCardProps } from "../../types/interfaces/components";
import { colors } from "../../assets/theme/colors";

const style: React.CSSProperties = {
  minWidth: 275,
  backgroundColor: colors.background.main,
  borderRadius: "20px",
  boxShadow: colors.shadow.card,
};

const BasicCard = ({ children, width }: BasicCardProps) => {
  return (
    <Card
      sx={{
        ...style,
        "&.MuiCard-root": {
          padding: "30px",
          width: !width ? "100%" : width,
        },
      }}>
      {children}
    </Card>
  );
};

export default BasicCard;
