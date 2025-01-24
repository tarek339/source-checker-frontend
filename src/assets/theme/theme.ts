import { createTheme } from "@mui/material";
import { colors } from "./colors";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Work Sans",
      "Helvetica",
      "Arial",
      "Lucida Grande",
      "sans-serif",
    ].join(","),
    allVariants: {
      color: colors.typography.main,
    },
    h1: {
      fontSize: "2.5rem",
      margin: 0,
      lineHeight: 1,
      fontWeight: 600,
      "@media (min-width:768px)": {
        fontSize: "3.75rem",
      },
    },
    h2: {
      fontSize: "2.25rem",
      lineHeight: 1.5,
      fontWeight: 600,
      "@media (max-width:500px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: 1.5,
      fontWeight: 500,
      "@media (max-width:375px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      lineHeight: 1,
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    caption: {
      color: colors.typography.white,
      fontSize: "2rem",
      fontWeight: 600,
      transition: "color 0.2s ease",
      "@media (max-width:375px)": {
        fontSize: "1.75rem",
      },
      "&:hover": {
        color: colors.secondary.main,
      },
    },
    body2: {
      fontSize: "1.25rem",
      lineHeight: 1.5,
    },
  },
});
