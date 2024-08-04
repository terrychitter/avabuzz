import Page from "../HOC/Page";
import Container from "@mui/material/Container";
import MainContentContainer from "../HOC/MainContentContainer";
import ContentPaper from "../HOC/ContentPaper";
import ProfileBanner from "./ProfileBanner";
import Biography from "./Biography";
import ProfileStats from "./ProfileStats";
import GroupsAndEvents from "./GroupsAndEvents";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { ThemedContent } from "../HOC/ThemedContent";
import UserContent from "./UserContent";
const Profile = () => {
  const theme = useTheme();
  const bannerUrl = "/profile_background.gif";
  return (
    <Page>
      <MainContentContainer sx={{ paddingBlockEnd: theme.spacing(2) }}>
        {/* <ThemedContent imageUrl={bannerUrl}> */}
        <Container>
          <Stack
            direction={"column"}
            gap={theme.spacing(1)}
            sx={{ width: "100%" }}
          >
            {/* Profile Banner */}
            <ProfileBanner background={bannerUrl} />
            {/* Profile Content */}

            {/* Profile Stats */}
            <ContentPaper>
              <ProfileStats />
            </ContentPaper>
            {/* Biography */}
            <ContentPaper>
              <Biography />
            </ContentPaper>
            <GroupsAndEvents />
            {/* User Content */}
            <ContentPaper>
              <UserContent />
            </ContentPaper>
          </Stack>
        </Container>
        {/* </ThemedContent> */}
      </MainContentContainer>
    </Page>
  );
};

export default Profile;
