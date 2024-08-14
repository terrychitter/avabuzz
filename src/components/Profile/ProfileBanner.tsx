import { Box, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import ProfilePictureKit from "../HOC/ProfilePictureKit";
import EditProfileButton from "./EditProfileButton";
import MyItemsButton from "./MyItemsButton";
import SettingsButton from "./SettingsButton";

interface ProfileBannerProps {
  background?: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ background }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        borderRadius={theme.spacing(2)}
        marginBlockStart={theme.spacing(1)}
        marginInline={theme.spacing(1)}
        position={"relative"}
        height={{
          xs: theme.spacing(15),
          md: theme.spacing(20),
          lg: theme.spacing(25),
        }}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: theme.spacing(1),
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <ProfilePictureKit />
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"column"} justifyContent={"space-between"}>
              <Stack
                direction={"row"}
                marginInlineEnd={theme.spacing(-1)}
                marginBlockStart={theme.spacing(-1)}
              >
                <EditProfileButton />
                <MyItemsButton />
                <SettingsButton />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default ProfileBanner;
