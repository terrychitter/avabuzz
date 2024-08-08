import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import ContentBox from "../HOC/ContentBox";
import MainContentContainer from "../HOC/MainContentContainer";
import AnimatedPage from "../HOC/Page";
import Aside from "./Aside";
import Biography from "./Biography";
import GroupsAndEvents from "./GroupsAndEvents";
import ProfileBanner from "./ProfileBanner";
import ProfileStats from "./ProfileStats";
import UserContent from "./UserContent";

const Profile = () => {
  // Get standalone status

  // Get theme
  const theme = useTheme();

  // Get is small screen or larger
  const isSmallScreenOrLarger = useMediaQuery(theme.breakpoints.up("sm"));

  // Banner URL
  const bannerUrl = "/profile_banner.gif";
  return (
    <AnimatedPage>
      <Container maxWidth={"lg"} sx={{ paddingInline: "0 !important" }}>
        <Grid container gap={0}>
          <Grid item xs sm md>
            <MainContentContainer sx={{ maxWidth: "md" }}>
              <Stack
                direction={"column"}
                sx={{ width: "100%" }}
                gap={{ xs: 0, md: 1 }}
              >
                {/* Profile Banner */}
                <ProfileBanner background={bannerUrl} />
                {/* Profile Content */}

                {/* Profile Stats */}
                <Box paddingInline={{ xs: 1, md: 1, lg: 3 }}>
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
                </Box>
              </Stack>
            </MainContentContainer>
          </Grid>
          {isSmallScreenOrLarger && (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{
                position: "sticky", // Make the Grid item sticky
                top: 0,
                alignSelf: "start", // Align the Grid item properly
                height: "100vh", // Ensure the sticky behavior is consistent
                overflow: "auto", // Allow scrolling within the sticky area if content exceeds the height
              }}
            >
              <Aside />
            </Grid>
          )}
        </Grid>
      </Container>
    </AnimatedPage>
  );
};

export default Profile;
