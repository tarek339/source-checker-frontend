import Button from "@mui/material/Button";
import styled from "styled-components";
import { BtnProps } from "../../types/interfaces/components";
import { colors } from "../../assets/theme/colors";

const StyledMUIButton = styled(Button)`
  && {
    background-color: ${colors.secondary.main};
    color: ${colors.primary.main};
    padding: 6px 20px;
    height: 37px;
    bordercolor: transparent;
    border-radius: 45px;
    transition: background-color 0.3s;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

const SummaryButton = ({ onClick }: BtnProps) => {
  return <StyledMUIButton onClick={onClick}>Ergebnisse</StyledMUIButton>;
};

export default SummaryButton;
