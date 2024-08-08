import { Box, Grid, Stack, useTheme, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import ContentBox from "../HOC/ContentBox";
import MainContentContainer from "../HOC/MainContentContainer";
import AnimatedPage from "../HOC/Page";
import Biography from "./Biography";
import GroupsAndEvents from "./GroupsAndEvents";
import ProfileBanner from "./ProfileBanner";
import ProfileStats from "./ProfileStats";
import UserContent from "./UserContent";
import QRCode from "../CustomComponents/QRCode";
import ContentPaper from "../HOC/ContentPaper";
import Button from "../CustomComponents/AnimatedButton";
import Link from "../CustomComponents/CustomLink";
import { useStandalone } from "../StandaloneContext";

const Profile = () => {
  // Get standalone status
  const { isStandalone } = useStandalone();

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
          {!isStandalone && isSmallScreenOrLarger && (
            <Grid item xs={12} sm={4} md={4}>
              <Box paddingInline={1} component={"aside"}>
                <ContentPaper
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    padding: theme.spacing(2),
                  }}
                >
                  <Stack gap={1}>
                    <Stack direction={{ xs: "row", sm: "column", md: "row" }}>
                      <QRCode />
                      <Stack direction={"column"} gap={1} textAlign="center">
                        <Link to="https://google.com">
                          <Button>Download on AppStore</Button>
                        </Link>
                        <Link to="http://google.com">
                          <Button>Download on Playstore</Button>
                        </Link>
                      </Stack>
                    </Stack>
                  </Stack>
                </ContentPaper>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </AnimatedPage>
  );
};

export default Profile;
