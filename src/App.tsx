import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import abzDefaultTheme from "./theme/abz_dark_theme";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StandaloneProvider } from "./components/StandaloneContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={abzDefaultTheme}>
      <CssBaseline />
      <StandaloneProvider>
        {" "}
        {/* Wrap your application with StandaloneProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<Signup />} />
            <Route path="/my-profile" element={<Profile />} />
          </Routes>
        </Router>
      </StandaloneProvider>
    </ThemeProvider>
  );
}

export default App;
