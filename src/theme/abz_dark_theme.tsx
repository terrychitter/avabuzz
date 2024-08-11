// theme.ts
import { createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

// Extend Palette and PaletteOptions interfaces
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      darkerBlack: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      darkerBlack?: string;
    };
  }
}

const black = "#171717";
const darkerBlack = "#080808";

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
      darkerBlack: `${darkerBlack}`,
    },
    background: {
      default: `${black}`,
      paper: `${darkerBlack}`,
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
    borderRadius: 5,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
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
          fontWeight: "bold",
          textDecoration: "none",
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          zIndex: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
          padding: 20,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 20,
          textAlign: "center",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          gap: 10,
          padding: 20,
          "& > * + *": {
            marginLeft: "0 !important",
          },
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
