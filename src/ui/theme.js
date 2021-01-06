import { createMuiTheme } from "@material-ui/core/styles";

const primaryColor = "#043353";
const secondaryColor = "#E44652";
const backgroundColor = "#FAF8F0";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      blue: primaryColor,
      red: secondaryColor,
      cream: backgroundColor,
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: backgroundColor,
    },
  },
  typography: {
    tab: {
      fontFamily: "'Montserrat', 'sans-serif'",
      fontSize: "1rem",
      color: primaryColor,
    },
    h1: {
      fontFamily: "'Montserrat', 'sans-serif'",
      fontWeight: "bold",
      fontSize: "3.5rem",
      color: primaryColor,
    },
    h2: {
      fontFamily: "'Montserrat', 'sans-serif'",
      fontWeight: "bold",
      fontSize: "3rem",
      color: primaryColor,
    },
    body1: {
      fontFamily: "'Chivo', 'sans-serif'",
      fontWeight: "300",
      fontSize: "1.8rem",
      color: primaryColor,
      textTransform: "none",
    },
    body2: {
      fontFamily: "'Chivo', 'sans-serif'",
      fontWeight: "400",
      fontSize: ".6rem",
      color: primaryColor,
    },
  },
});

export default theme;
