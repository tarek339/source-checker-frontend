import Button from "@mui/material/Button";
import styled from "styled-components";
import { BtnProps } from "../../types/interfaces/components";
import { colors } from "../../assets/theme/colors";

const StyledMUIButton = styled(Button)`
  && {
    font-family: Work Sans, Helvetica, Arial, Lucida Grande, sans-serif;
    border-radius: 50px;
    padding: 12px 32px;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    box-shadow: ${colors.shadow.main};
    border: 7px solid ${colors.secondary.main};
    color: ${colors.secondary.main};
    background-color: ${colors.primary.main};

    &:hover {
      background-color: ${colors.primary.hover};
      transition: background-color 0.25s;
    }
  }
`;

const TeacherButton = ({ onClick, title }: BtnProps) => {
  return <StyledMUIButton onClick={onClick}>{title}</StyledMUIButton>;
};

export default TeacherButton;
