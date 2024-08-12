// theme.ts
import { createTheme, PaletteMode } from "@mui/material";
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

// Define your dark and light palette options
const darkPalette = {
  mode: "dark" as PaletteMode,
  primary: {
    main: "#CD65F0",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#f15bb5d9",
  },
  custom: {
    darkerBlack: "#080808",
  },
  background: {
    default: "#171717",
    paper: "#080808",
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
};

const lightPalette = {
  mode: "light" as PaletteMode,
  primary: {
    main: "#CD65F0",
    contrastText: "#171717",
  },
  secondary: {
    main: "#f15bb5d9",
  },
  custom: {
    darkerBlack: "#ffffff",
  },
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },
  text: {
    primary: "#171717",
    secondary: "rgba(0,0,0,0.7)",
    disabled: "rgba(0,0,0,0.5)",
  },
  error: {
    main: "#d84238",
    contrastText: "#ffffff",
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
};

// Base theme options that can be shared
const baseThemeOptions: ThemeOptions = {
  typography: {
    htmlFontSize: 8,
    fontFamily: "Nunito Sans",
    fontSize: 6,
    h1: { fontFamily: "Montserrat" },
    h2: { fontFamily: "Montserrat" },
    h3: { fontFamily: "Montserrat" },
    h4: { fontFamily: "Montserrat" },
    h5: { fontFamily: "Montserrat" },
    h6: { fontFamily: "Montserrat" },
    body1: { fontFamily: "Montserrat" },
    body2: { fontFamily: "Montserrat" },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
          border-radius: 10px;
          background-color: transparent;
        }
        ::-webkit-scrollbar {
          width: 3px;
          background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
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
    MuiChip: {
      styleOverrides: {
        root: {
          width: "fit-content",
        },
        label: {
          paddingInline: 10,
        },
      },
    },
  },
};

// Create the dark theme
export const darkTheme = createTheme({
  ...baseThemeOptions,
  palette: darkPalette,
});

// Create the light theme
export const lightTheme = createTheme({
  ...baseThemeOptions,
  palette: lightPalette,
});
