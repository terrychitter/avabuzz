import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import abzDefaultTheme from "./theme/abz_dark_theme";
import "./App.css";
import { loadable } from "./utils/loadable";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLoader from "./components/CustomComponents/DefaultLoader";
import { StandaloneProvider } from "./components/StandaloneContext";

const Profile = loadable(() => import("./components/Profile/Profile"), {
  fallback: <DefaultLoader />,
});

const ProfileRoute = loadable(
  () => import("./components/Profile/ProfileRoute"),
  {
    fallback: <DefaultLoader />,
  }
);

const Signup = loadable(() => import("./components/Signup/Signup"), {
  fallback: <DefaultLoader />,
});

const Home = loadable(() => import("./components/Home/Home"), {
  fallback: <DefaultLoader />,
});

const Login = loadable(() => import("./components/Login/Login"), {
  fallback: <DefaultLoader />,
});

const NotFound = loadable(() => import("./NotFound"), {
  fallback: <DefaultLoader />,
});

const ProfileSettings = loadable(
  () => import("./components/Profile/Settings/ProfileSettings"),
  {
    fallback: <DefaultLoader />,
  }
);

function App() {
  return (
    <ThemeProvider theme={abzDefaultTheme}>
      <CssBaseline />
      <StandaloneProvider>
        {/* Wrap your application with StandaloneProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="create-account" element={<Signup />} />
            <Route path="profile" element={<ProfileRoute />}>
              <Route index element={<Profile />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StandaloneProvider>
    </ThemeProvider>
  );
}

export default App;
