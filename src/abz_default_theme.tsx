import { createTheme, ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#CD65F0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9d51b9",
    },
    background: {
      default: "#1e1e1e",
      paper: "#252525",
    },
    text: {
      primary: "#9e9e9e",
      secondary: "rgba(129,129,129,0.7)",
      disabled: "rgba(86,86,86,0.5)",
    },
    error: {
      main: "#d84238",
      contrastText: "#c9c9c9",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontFamily: "Nunito Sans",
    fontSize: 14,
    h1: {
      fontFamily: "Nunito",
    },
    h2: {
      fontFamily: "Nunito",
    },
    h3: {
      fontFamily: "Nunito",
    },
    h4: {
      fontFamily: "Nunito",
    },
    h5: {
      fontFamily: "Nunito",
    },
    h6: {
      fontFamily: "Nunito",
    },
    body1: {
      fontFamily: "Montserrat",
    },
    body2: {
      fontFamily: "Montserrat",
    },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

export const abzDefaultTheme = createTheme(themeOptions);

export default abzDefaultTheme;
