import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ProfilePictureKit from "./ProfilePictureKit";
import UsernameTag from "./UsernameTag";
import PublicIdTag from "./PublicIdTag";
import { Box, useTheme } from "@mui/material";
import SettingsButton from "./SettingsButton";
import MyItemsButton from "./MyItemsButton";
import BadgeDisplay from "./BadgeDisplay";

interface ProfileBannerProps {
  background?: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ background }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        height: { xs: "200px", md: "250px" },
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBlockStart: theme.spacing(2),
        paddingBlockEnd: theme.spacing(1),
        paddingInline: { xs: theme.spacing(1), md: theme.spacing(4) },
      }}
    >
      {/* Left side of the banner */}
      <Stack
        direction={"row"}
        width={"100%"}
        height={"100%"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"column"}
          height={"100%"}
          justifyContent={"space-between"}
          gap={theme.spacing(2)}
        >
          <Box>
            <ProfilePictureKit />
          </Box>
          <Stack direction={"row"} gap={theme.spacing(1)}>
            <UsernameTag>txrry_x</UsernameTag>
            <PublicIdTag>XXX-XXX</PublicIdTag>
          </Stack>
        </Stack>
        {/* Right side of the banner */}
        <Stack direction={"column"} justifyContent={"space-between"}>
          <Stack direction={"row"}>
            <MyItemsButton />
            <SettingsButton />
          </Stack>
          <BadgeDisplay />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ProfileBanner;
