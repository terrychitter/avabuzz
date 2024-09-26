import {
  Box,
  Grid,
  Skeleton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useErrorBoundary } from "react-error-boundary";
import { UserProvider } from "../../context/UserContext";
import { usefetchLoggedInUser } from "../../hooks/useUser";
import { loadable } from "../../utils/loadable";
import DefaultLoader from "../CustomComponents/DefaultLoader";
import AnimatedPage from "../HOC/AnimatedPage";
import MainContentContainer from "../HOC/MainContentContainer";
import Biography from "./Biography";
import GenConSexGroup from "./GenConSexGroup";
import ProfileAsideContent from "./ProfileAsideContent";
import ProfileBanner from "./ProfileBanner";
import ProfileStats from "./ProfileStats";
import FriendCodeTag from "./PublicIdTag";
import UserContent from "./UserContent";
import UsernameTag from "./UsernameTag";

const GroupsAndEventsSkeleton = () => {
  const theme = useTheme();
  const isMediumScreenOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Skeleton variant="rounded" animation={"wave"} height={110} />
      </Grid>
      {isMediumScreenOrLarger && (
        <Grid item xs={12} md={6}>
          <Skeleton variant="rounded" animation={"wave"} height={110} />
        </Grid>
      )}
    </Grid>
  );
};

const GroupsAndEvents = loadable(() => import("./GroupsAndEvents"), {
  fallback: <GroupsAndEventsSkeleton />,
});

const Profile = () => {
  const theme = useTheme();
  const { showBoundary } = useErrorBoundary();

  const { data: userData, error, isLoading } = usefetchLoggedInUser();

  if (error) {
    showBoundary("Could not get your profile");
  }

  if (isLoading) {
    return <DefaultLoader />;
  }

  return (
    <UserProvider userData={userData ?? null}>
      <AnimatedPage>
        <MainContentContainer
          pullToRefresh
          asideContent={<ProfileAsideContent />}
        >
          <Stack direction={"column"} gap={{ xs: 0, md: 1 }} height={"100%"}>
            {/* Profile Banner */}
            {userData && (
              <ProfileBanner
                background={userData.active_accessories.active_banner_url}
              />
            )}
            {/* Profile Content */}
            <Stack
              direction={"column"}
              paddingInline={theme.spacing(1)}
              marginBlockStart={theme.spacing(1)}
              marginBlockEnd={theme.spacing(2)}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignContent={"center"}
              >
                {userData && (
                  <UsernameTag
                    badgeUrl={userData.active_accessories.active_badge_url}
                    username={userData.username}
                  ></UsernameTag>
                )}
                {userData && <FriendCodeTag code={userData.friend_code} />}
              </Stack>
              {userData && (
                <GenConSexGroup
                  country={userData.country}
                  sexuality={userData.orientation}
                  gender={userData.gender}
                />
              )}
              <Biography />
              <Box marginBlock={theme.spacing(2)}>
                <ProfileStats />
              </Box>
              {/* Groups and Events */}
              <GroupsAndEvents />
              {/* User Content */}
              <Box flexGrow={1} marginBlockStart={theme.spacing(3)}>
                <UserContent />
              </Box>
            </Stack>
          </Stack>
        </MainContentContainer>
      </AnimatedPage>
    </UserProvider>
  );
};

export default Profile;
