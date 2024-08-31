import Button from "@mui/material/Button";
import styled from "styled-components";
import { useSelectors } from "../../hooks";
import Flex from "../containers/Flex";
import { IButton } from "../../types/interfaces/components";
import { useState } from "react";

const StyledMUIButton = styled(Button)`
  && {
    color: #fff;
    padding: 6px 20px;
    height: 37px;
    border-radius: 45px;
    font-weight: bold;
    transition: background-color 0.3s;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

    &:disabled {
      background-color: #ccc;
      color: #777;
    }
  }
`;

const StyledButton = ({
  title,
  type,
  error,
  icon,
  gap,
  disabled,
  onClick,
}: IButton) => {
  const [hovered, setHovered] = useState(false);
  const { loading } = useSelectors();

  return (
    <StyledMUIButton
      style={{
        backgroundColor: hovered
          ? error
            ? "#cc0000"
            : "#1420ae"
          : error
          ? "#ff0000"
          : "#2835c3",
        cursor: loading ? "default" : "pointer",
      }}
      type={!type ? "button" : type}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      disabled={disabled}>
      <Flex direction={"row"} gap={gap!} align="center">
        <>
          {icon}
          {title}
        </>
      </Flex>
    </StyledMUIButton>
  );
};

export default StyledButton;
