import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#043353",
    },
    secondary: {
      main: "#E44652",
    },
    background: {
      default: "#FAF8F0",
    },
  },
});

export default theme;
