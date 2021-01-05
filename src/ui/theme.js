import { createMuiTheme } from "@material-ui/core/styles";

const primaryColor = "#043353";
const secondaryColor = "#E44652";
const backgroundColor = "#FAF8F0";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
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
    h1: {
      fontFamily: "'Montserrat', 'sans-serif'",
      fontWeight: "bold",
      fontSize: "1rem",
      color: primaryColor,
    },
    body1: {
      fontFamily: "'Chivo', 'sans-serif'",
      fontWeight: "400",
      fontSize: ".8rem",
      color: primaryColor,
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
