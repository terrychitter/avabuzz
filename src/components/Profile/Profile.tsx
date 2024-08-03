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
const Profile = () => {
  const theme = useTheme();
  return (
    <Page>
      <MainContentContainer>
        <Container>
          <Stack
            direction={"column"}
            gap={theme.spacing(1)}
            sx={{ width: "100%" }}
          >
            {/* Profile Banner */}
            <ProfileBanner />
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
          </Stack>
        </Container>
      </MainContentContainer>
    </Page>
  );
};

export default Profile;
