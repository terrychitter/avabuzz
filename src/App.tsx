import { Grid, Container, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import abzDefaultTheme from "./theme/abz_default_theme";

function App() {
  return (
    <ThemeProvider theme={abzDefaultTheme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
