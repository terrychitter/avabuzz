import { Avatar, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface UsernameKitProperties {
  username?: string;
  badgeUrl?: string;
}

const UsernameKit: React.FC<UsernameKitProperties> = ({
  username = "txrry_x",
  badgeUrl,
}) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={theme.spacing(1)}>
      {/* Username */}
      <Typography variant="body1">{username}</Typography>
      <Avatar
        alt="Salad Badge"
        src={badgeUrl}
        sx={{
          width: theme.typography.body1.fontSize,
          height: theme.typography.body1.fontSize,
        }}
      />
    </Stack>
  );
};

export default UsernameKit;
