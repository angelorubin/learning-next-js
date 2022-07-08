import { createTheme } from "@mui/material";
import { blue, green, orange } from "@material-ui/core/colors";

export const theme = createTheme({
	palette: {
		common: {
			white: "#fff",
			black: "#000",
		},
		primary: {
			main: blue[500],
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
