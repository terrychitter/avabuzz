import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Aside from "../CustomComponents/Aside";
import NavDrawer from "../CustomComponents/NavDrawer";
import ContentBox from "../HOC/ContentBox";
import MainContentContainer from "../HOC/MainContentContainer";
import AnimatedPage from "../HOC/Page";
import Biography from "./Biography";
import GroupsAndEvents from "./GroupsAndEvents";
import ProfileBanner from "./ProfileBanner";
import ProfileStats from "./ProfileStats";
import UserContent from "./UserContent";

const Profile = () => {
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
          <Grid item xs={12} sm={8} md={8}>
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
            // Aside Grid item
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{
                backgroundColor: theme.palette.custom.lightBlack,
                position: "sticky",
                top: 0,
                alignSelf: "start",
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Aside />
            </Grid>
          )}
        </Grid>
      </Container>
      {!isSmallScreenOrLarger && <NavDrawer />}
    </AnimatedPage>
  );
};

export default Profile;
