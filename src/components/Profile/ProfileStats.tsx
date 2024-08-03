import { Box, Stack, Typography, useTheme } from "@mui/material";

const ProfileStats = () => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-around"
      alignItems="center"
    >
      <Box
        textAlign="center"
        sx={{
          flex: 1,
          borderRight: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>0</Typography>
        <Typography component="p" sx={{ fontSize: "0.9rem" }}>
          Posts
        </Typography>
      </Box>
      <Box
        textAlign="center"
        sx={{
          flex: 1,
          borderRight: `1px solid ${theme.palette.divider}`,
          marginInlineStart: "0 !important",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>0</Typography>
        <Typography component="p" sx={{ fontSize: "0.9rem" }}>
          Followers
        </Typography>
      </Box>
      <Box
        textAlign="center"
        sx={{
          flex: 1,
          marginInlineStart: "0 !important",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>0</Typography>
        <Typography component="p" sx={{ fontSize: "0.9rem" }}>
          Following
        </Typography>
      </Box>
    </Stack>
  );
};

export default ProfileStats;
