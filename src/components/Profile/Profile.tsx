import { Box, Stack } from "@mui/material";
import theme from "../../theme/abz_dark_theme";
import ContentBox from "../HOC/ContentBox";
import MainContentContainer from "../HOC/MainContentContainer";
import AnimatedPage from "../HOC/Page";
import Biography from "./Biography";
import GroupsAndEvents from "./GroupsAndEvents";
import ProfileBanner from "./ProfileBanner";
import ProfileStats from "./ProfileStats";
import UserContent from "./UserContent";

const Profile = () => {
  // Banner URL
  const bannerUrl = "/profile_banner.gif";

  return (
    <AnimatedPage>
      <MainContentContainer>
        <Stack direction={"column"} gap={{ xs: 0, md: 1 }} height={"100%"}>
          {/* Profile Banner */}
          <ProfileBanner background={bannerUrl} />
          {/* Profile Content */}

          {/* Profile Stats */}
          <Stack paddingInline={1} height={"100%"}>
            <ContentBox>
              <ProfileStats />
            </ContentBox>
            {/* Biography */}
            <ContentBox sx={{ paddingInline: 0 }}>
              <Biography />
            </ContentBox>
            <GroupsAndEvents />
            {/* User Content */}
            <Box flexGrow={1} marginBlockStart={theme.spacing(3)}>
              <UserContent />
            </Box>
          </Stack>
        </Stack>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default Profile;
