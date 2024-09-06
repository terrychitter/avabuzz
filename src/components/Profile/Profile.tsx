import {
  Box,
  Grid,
  Skeleton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useErrorBoundary } from "react-error-boundary";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../api/userApi";
import { ProfileProvider } from "../../Context/ProfileContext";
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

  // Get user ID from the URL
  const { public_id = "" } = useParams();

  const { isLoading, data, error } = useQuery("userData", () =>
    fetchUser(public_id)
  );

  if (isLoading) {
    return <DefaultLoader />;
  }

  if (error) {
    showBoundary(error);
    return null;
  }

  console.log(data);

  return (
    <ProfileProvider profileData={data}>
      <AnimatedPage>
        <MainContentContainer
          pullToRefresh
          asideContent={<ProfileAsideContent />}
        >
          <Stack direction={"column"} gap={{ xs: 0, md: 1 }} height={"100%"}>
            {/* Profile Banner */}
            <ProfileBanner
              background={data.active_accessories.active_banner_url}
            />
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
                <UsernameTag
                  badgeUrl={data.active_accessories.active_badge_url}
                  username={data.username}
                ></UsernameTag>
                <FriendCodeTag code={data.friend_code} />
              </Stack>
              <GenConSexGroup
                country={data.country}
                sexuality={data.orientation}
                gender={data.gender}
              />
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
    </ProfileProvider>
  );
};

export default Profile;
