import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme/abz_dark_theme";
import "./App.css";
import { loadable } from "./utils/loadable";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLoader from "./components/CustomComponents/DefaultLoader";
import { StandaloneProvider } from "./components/StandaloneContext";
import ProfileSettingsRoute from "./components/Profile/Settings/ProfileSettingsRoute";
import { Button } from "@mui/material";
import { useState } from "react";

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

const NotificationSettings = loadable(
  () =>
    import("./components/Profile/Settings/Notifications/NotificationSettings"),
  {
    fallback: <DefaultLoader />,
  }
);

const PrivacySettings = loadable(
  () => import("./components/Profile/Settings/Privacy/PrivacySettings"),
  {
    fallback: <DefaultLoader />,
  }
);

const Followers = loadable(
  () => import("./components/Profile/Followers/Followers"),
  {
    fallback: <DefaultLoader />,
  }
);

const Following = loadable(
  () => import("./components/Profile/Following/Folllowing"),
  {
    fallback: <DefaultLoader />,
  }
);

const BlockedUsers = loadable(
  () => import("./components/Profile/Settings/BlockedUsers/BlockedUsers"),
  {
    fallback: <DefaultLoader />,
  }
);

const AppearanceSettings = loadable(
  () => import("./components/Profile/Settings/Appearance/AppearanceSettings"),
  {
    fallback: <DefaultLoader />,
  }
);

const EditProfile = loadable(
  () => import("./components/Profile/Edit/EditProfile"),
  {
    fallback: <DefaultLoader />,
  }
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode: any) => !prevMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <StandaloneProvider>
        {/* Wrap your application with StandaloneProvider */}
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Button onClick={toggleTheme}>
                    Change to {isDarkMode ? "Light" : "Dark"} Mode
                  </Button>
                </>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="create-account" element={<Signup />} />

            {/* Profile */}
            <Route path="profile" element={<ProfileRoute />}>
              <Route index element={<Profile />} />
              <Route path="followers" element={<Followers />} />
              <Route path="following" element={<Following />} />
              <Route path="edit" element={<EditProfile />} />

              {/* Profile Settings */}
              <Route path="settings" element={<ProfileSettingsRoute />}>
                <Route index element={<ProfileSettings />} />
                <Route path="appearance" element={<AppearanceSettings />} />
                <Route
                  path="notifications"
                  element={<NotificationSettings />}
                />
                <Route path="privacy" element={<PrivacySettings />} />
                <Route path="blocked-users" element={<BlockedUsers />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StandaloneProvider>
    </ThemeProvider>
  );
}

export default App;
