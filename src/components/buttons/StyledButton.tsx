import Button from "@mui/material/Button";
import styled from "styled-components";
import { useSelectors } from "../../hooks";
import Flex from "../containers/Flex";
import { IButton } from "../../types/interfaces/components";

const StyledButton = ({ title, type, error, icon, gap, onClick }: IButton) => {
  const { loading } = useSelectors();

  const StyledMUIButton = styled(Button)`
    && {
      background-color: ${error ? "#ff0000" : "#2835c3"};
      color: #fff;
      padding: 6px 20px;
      height: 37px;
      cursor: ${loading ? "default" : "pointer"};
      border-radius: 45px;
      font-weight: bold;
      transition: background-color 0.3s;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 600;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
        rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

      &:hover {
        background-color: ${error ? "#cc0000" : "#1420ae"};
      }

      &:disabled {
        background-color: #ccc;
        color: #777;
      }
    }
  `;

  return (
    <StyledMUIButton type={!type ? "button" : type} onClick={onClick}>
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
