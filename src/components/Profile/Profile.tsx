import { Box, Stack, useTheme } from "@mui/material";
import AnimatedPage from "../HOC/AnimatedPage";
import MainContentContainer from "../HOC/MainContentContainer";
import Biography from "./Biography";
import GenConSexGroup from "./GenConSexGroup";
import GroupsAndEvents from "./GroupsAndEvents";
import ProfileAsideContent from "./ProfileAsideContent";
import ProfileBanner from "./ProfileBanner";
import ProfileStats from "./ProfileStats";
import PublicIdTag from "./PublicIdTag";
import UserContent from "./UserContent";
import UsernameTag from "./UsernameTag";

const Profile = () => {
  const theme = useTheme();

  // Banner URL
  const bannerUrl =
    "https://media.giphy.com/media/YkOInyW8oZHPvI8aDW/giphy.gif?cid=790b7611cqr0sv24hs6r1n6p3rhl43cxsxhnh1qssk8ymtcx&ep=v1_gifs_search&rid=giphy.gif&ct=g";

  return (
    <AnimatedPage>
      <MainContentContainer asideContent={<ProfileAsideContent />}>
        <Stack direction={"column"} gap={{ xs: 0, md: 1 }} height={"100%"}>
          {/* Profile Banner */}
          <ProfileBanner background={bannerUrl} />

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
              <UsernameTag>txrry_x</UsernameTag>
              <PublicIdTag>ABC-DEF</PublicIdTag>
            </Stack>
            <GenConSexGroup />
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
  );
};

export default Profile;
