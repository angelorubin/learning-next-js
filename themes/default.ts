import { createTheme } from "@mui/material";
import { green, blue, orange, pink } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    common: {
      white: "#fff",
      black: "#000",
    },
    primary: {
      main: pink[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
});
