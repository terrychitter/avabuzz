import { Avatar, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const UsernameKit = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={theme.spacing(1)}>
      {/* Username */}
      <Typography variant="body1">txrry_x</Typography>
      <Avatar
        alt="Salad Badge"
        src="/salad_badge.png"
        sx={{
          width: theme.typography.body1.fontSize,
          height: theme.typography.body1.fontSize,
        }}
      />
    </Stack>
  );
};

export default UsernameKit;
