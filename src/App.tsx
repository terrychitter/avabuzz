import { ThemeProvider } from "@mui/material";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import abzDefaultTheme from "./abz_default_theme";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <ThemeProvider theme={abzDefaultTheme}>
      <CssBaseline />
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="button" display={"block"} gutterBottom>
        Button Text
      </Typography>
      <Typography variant="caption" display={"block"} gutterBottom>
        Caption Text
      </Typography>
      <Typography variant="overline" display={"block"} gutterBottom>
        Overline Text
      </Typography>
      <Button variant="contained">Sumbit</Button>
    </ThemeProvider>
  );
}

export default App;
