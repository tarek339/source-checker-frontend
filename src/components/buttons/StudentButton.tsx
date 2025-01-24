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
    border: 7px solid ${colors.primary.main};
    background-color: ${colors.secondary.main};
    color: ${colors.primary.main};

    &:hover {
      transition: background-color 0.25s;
      border-color: ${colors.primary.hover};
      color: ${colors.primary.hover};
    }

    // @media (min-width: 1024px) {
    //   padding: 16px 36px;
    //   font-size: 24px;
    //   width: 300px;
    // }
  }
`;

const StudentButton = ({ onClick, title }: BtnProps) => {
  return <StyledMUIButton onClick={onClick}>{title}</StyledMUIButton>;
};

export default StudentButton;
