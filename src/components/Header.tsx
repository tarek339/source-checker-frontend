import { useNavigate } from "react-router-dom";
import { HeaderProps } from "../types/interfaces/components";
import { useState } from "react";
import { Home } from "./icons";
import { useBreakPoints } from "../hooks";
import { AppBar, Toolbar } from "@mui/material";
import { colors } from "../assets/theme/colors";

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  const { windowWidth } = useBreakPoints();
  const [onHover, setOnHover] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: "3em",
        backgroundColor: colors.primary.main,
        boxShadow: colors.shadow.appBar,
      }}>
      <Toolbar
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onClick={() => {
          sessionStorage.removeItem("token");
          navigate("/");
        }}
        sx={{
          cursor: "pointer",
          color: onHover ? colors.secondary.main : colors.typography.white,
          letterSpacing: "1px",
          fontSize: windowWidth <= 320 ? "1.5em" : "2em",
          fontWeight: 600,
          width: "min-content",
          display: "flex",
          alignItems: "center",
          gap: "3px",
        }}>
        <Home size={windowWidth <= 320 ? 36 : 40} />
        {title}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
