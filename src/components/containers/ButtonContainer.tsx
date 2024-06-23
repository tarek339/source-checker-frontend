import { useBreakPoints } from "../../hooks";
import { IButtonContainer } from "../../types/interfaces/components";

const ButtonContainer = ({ children, style }: IButtonContainer) => {
  const { windowWidth } = useBreakPoints();
  const maxWidth = windowWidth <= 500;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: maxWidth ? "column-reverse" : "row",
        justifyContent: "space-between",
        alignItems: maxWidth ? "stretch" : "center",
        gap: "20px",
        ...style,
      }}>
      {children}
    </div>
  );
};

export default ButtonContainer;
