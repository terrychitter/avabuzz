import { Box, Stack, Typography, useTheme } from "@mui/material";
import Link from "../CustomComponents/CustomLink";
import { useUser } from "../../context/UserContext";
import { formatNumber } from "../../utils/formatters";

const ProfileStats = () => {
  const theme = useTheme();

  // use profile stats from context
  const {
    follower_count = 0,
    following_count = 0,
    post_count = 0,
  } = useUser().user?.user_stats || {};

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
        <Typography sx={{ fontWeight: "bold" }}>
          {formatNumber(post_count)}
        </Typography>
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
        <Link to="followers">
          <Typography sx={{ fontWeight: "bold" }}>
            {formatNumber(follower_count)}
          </Typography>
          <Typography component="p" sx={{ fontSize: "0.9rem" }}>
            Followers
          </Typography>
        </Link>
      </Box>
      <Box
        textAlign="center"
        sx={{
          flex: 1,
          marginInlineStart: "0 !important",
        }}
      >
        <Link to="following">
          <Typography sx={{ fontWeight: "bold" }}>
            {formatNumber(following_count)}
          </Typography>
          <Typography component="p" sx={{ fontSize: "0.9rem" }}>
            Following
          </Typography>
        </Link>
      </Box>
    </Stack>
  );
};

export default ProfileStats;
