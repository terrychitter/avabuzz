// theme.ts
import { createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import backgroundImage from "./background_tile.png";

// Extend Palette and PaletteOptions interfaces
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      lightBlack: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      lightBlack?: string;
    };
  }
}

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
    custom: {
      lightBlack: "#1e1e1e",
    },
    background: {
      default: "#000000",
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
    htmlFontSize: 8,
    fontFamily: "Nunito Sans",
    fontSize: 6,
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
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @media (min-width: 600px) { /* md breakpoint for MUI */
          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${backgroundImage});
            background-repeat: repeat;
            background-attachment: fixed;
            opacity: 0.5;
            z-index: -1;
          }
        }

        ::webkit-scrollbar-track
        {
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
          border-radius: 10px;
          background-color: transparent;
        }

        ::-webkit-scrollbar
        {
          width: 3px;
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb
        {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          background-color: #555;
        }
      `,
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
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

const theme = createTheme(themeOptions);

export default theme;
