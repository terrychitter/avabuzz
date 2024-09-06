import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useRegisterSW } from "virtual:pwa-register/react";
import "./App.css";
import AppErrorPage from "./components/ErrorHandling/AppErrorPage";
import DefaultLoader from "./components/CustomComponents/DefaultLoader";
import Startup from "./components/CustomComponents/Startup/Startup";
import MainNavBar from "./components/Navbar/MainNavBar";
import { StandaloneProvider } from "./components/StandaloneContext";
import Debug from "./Debug";
import OfflinePage from "./OfflinePage";
import UpdatedAvailable from "./UpdateAvailable/UpdateAvailable";
import { loadable } from "./utils/loadable";

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

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const HashtagPage = loadable(
  () => import("./components/HOC/Hashtags/HashtagPage"),
  {
    fallback: <DefaultLoader />,
  }
);

const FollowedHashtags = loadable(
  () => import("./components/Home/FollowedHashtags/FollowedHashtags"),
  {
    fallback: <DefaultLoader />,
  }
);

const Search = loadable(() => import("./components/Home/Search"), {
  fallback: <DefaultLoader />,
});

function App() {
  // Update service worker every hour
  const updateInterval = 60 * 60 * 1000;
  useRegisterSW({
    onRegistered(r) {
      r &&
        setInterval(() => {
          r.update();
        }, updateInterval);
    },
  });

  // Create a QueryClient instance
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <StandaloneProvider>
        <UpdatedAvailable />
        <Router>
          <ErrorBoundary FallbackComponent={AppErrorPage}>
            <Routes>
              {/* Redirect from '/' to '/home' */}
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/startup" element={<Startup />} />
              <Route path="/offline" element={<OfflinePage />} />
              <Route
                path="/home"
                element={
                  <>
                    <MainNavBar />
                    <Home />
                  </>
                }
              />
              <Route path="debug" element={<Debug />} />
              <Route path="login" element={<Login />} />
              <Route path="create-account" element={<Signup />} />
              {/* Search */}
              <Route path="/search" element={<Search />} />
              {/* Hashtags */}
              <Route path="/followed-hashtags" element={<FollowedHashtags />} />
              <Route path="/hashtags/:hashtag" element={<HashtagPage />} />
              {/* Profile */}
              <Route
                path="profile/:public_id"
                element={
                  <>
                    <MainNavBar />
                    <ProfileRoute />
                  </>
                }
              >
                <Route index element={<Profile />} />
                <Route path="followers" element={<Followers />} />
                <Route path="following" element={<Following />} />
              </Route>
              {/* Profile Edit */}
              <Route path="profile-edit" element={<EditProfile />} />
              {/* Settings */}
              <Route
                path="settings/*"
                element={
                  <SettingsLayout>
                    <Routes>
                      <Route index element={<ProfileSettings />} />
                      <Route
                        path="appearance"
                        element={<AppearanceSettings />}
                      />
                      <Route
                        path="notifications"
                        element={<NotificationSettings />}
                      />
                      <Route path="privacy" element={<PrivacySettings />} />
                      <Route path="blocked-users" element={<BlockedUsers />} />
                      {/* Catch-all for 404 inside settings */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </SettingsLayout>
                }
              />
              {/* Catch-all for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </StandaloneProvider>
    </QueryClientProvider>
  );
}

export default App;
