import { Stack, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import ContentBox from "../HOC/ContentBox";
import MainContentContainer from "../HOC/MainContentContainer";
import AnimatedPage from "../HOC/Page";
import Biography from "./Biography";
import GroupsAndEvents from "./GroupsAndEvents";
import ProfileBanner from "./ProfileBanner";
import ProfileStats from "./ProfileStats";
import UserContent from "./UserContent";
const Profile = () => {
  const theme = useTheme();
  const bannerUrl = "/profile_background.gif";
  return (
    <AnimatedPage>
      <MainContentContainer sx={{ paddingBlockEnd: theme.spacing(2) }}>
        {/* <ThemedContent imageUrl={bannerUrl}> */}
        <Container sx={{ paddingInline: 0 }}>
          <Stack
            direction={"column"}
            gap={theme.spacing(1)}
            sx={{ width: "100%" }}
          >
            {/* Profile Banner */}
            <ProfileBanner background={bannerUrl} />
            {/* Profile Content */}

            {/* Profile Stats */}
            <ContentBox>
              <ProfileStats />
            </ContentBox>
            {/* Biography */}
            <ContentBox sx={{ paddingInline: 0 }}>
              <Biography />
            </ContentBox>
            <GroupsAndEvents />
            {/* User Content */}
            <ContentBox>
              <UserContent />
            </ContentBox>
          </Stack>
        </Container>
        {/* </ThemedContent> */}
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default Profile;
