import { ActionButtonProps } from "../../../types/interfaces/components";

const style: React.CSSProperties = {
  border: "2px dashed lightgray",
  borderRadius: "10px",
  height: "230px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
  cursor: "pointer",
  backgroundColor: "transparent",
};

const ActionButton = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  borderColor,
  color,
  icon,
  title,
}: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        ...style,
        borderColor: borderColor,
        color: color,
      }}>
      {icon}
      {title}
    </button>
  );
};

export default ActionButton;
