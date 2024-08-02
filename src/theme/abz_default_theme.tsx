import { createTheme, ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#CD65F0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f15bb5d9",
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
  // Typography themes
  typography: {
    fontFamily: "Nunito Sans",
    fontSize: 14,
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontFamily: "Montserrat",
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontFamily: "Montserrat",
    },
    h6: {
      fontFamily: "Montserrat",
    },
    body1: {
      fontFamily: "Montserrat",
    },
    body2: {
      fontFamily: "Montserrat",
    },
  },
  // Components themes
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
          textDecoration: "none",
        }),
      },
    },
  },
};

export const abzDefaultTheme = createTheme(themeOptions);

export default abzDefaultTheme;
