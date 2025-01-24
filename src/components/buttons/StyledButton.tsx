import Button from "@mui/material/Button";
import styled from "styled-components";
import { useSelectors } from "../../hooks";
import { ButtonProps } from "../../types/interfaces/components";
import { useState } from "react";
import { colors } from "../../assets/theme/colors";

const StyledMUIButton = styled(Button)`
  && {
    color: ${colors.button.main};
    padding: 6px 20px;
    height: 37px;
    border-radius: 45px;
    transition: background-color 0.3s;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: ${colors.shadow.main};
  }
`;

const StyledButton = ({
  title,
  type,
  error,
  startIcon,
  endIcon,
  disabled,
  fullWidth,
  onClick,
  style,
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const { loading } = useSelectors();

  return (
    <StyledMUIButton
      style={{
        backgroundColor: hovered
          ? error
            ? colors.desctructed.hover
            : colors.primary.hover
          : error
          ? colors.desctructed.main
          : colors.primary.main,
        cursor: loading ? "default" : "pointer",
        ...style,
      }}
      type={!type ? "button" : type}
      fullWidth={fullWidth}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}>
      {title}
    </StyledMUIButton>
  );
};

export default StyledButton;
