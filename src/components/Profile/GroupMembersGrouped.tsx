import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "../CustomComponents/CustomLink";
import { useTheme } from "@mui/material/styles";
import { color } from "framer-motion";

const GroupMembersGrouped = () => {
  const theme = useTheme();

  const groupAvatarSx = {
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      boxShadow: theme.shadows[4],
      fontSize: theme.typography.body2.fontSize,
    },
  };

  const avatarSx = {};

  return (
    <Box marginInlineEnd={theme.spacing(3)}>
      <Link to="/groups/group_id/members">
        <AvatarGroup max={4} sx={groupAvatarSx}>
          <Avatar src="/static/images/avatar/1.jpg" sx={avatarSx} />
          <Avatar src="/static/images/avatar/2.jpg" sx={avatarSx} />
          <Avatar src="/static/images/avatar/3.jpg" sx={avatarSx} />
          <Avatar src="/static/images/avatar/4.jpg" sx={avatarSx} />
          <Avatar src="/static/images/avatar/5.jpg" sx={avatarSx} />
        </AvatarGroup>
      </Link>
    </Box>
  );
};

export default GroupMembersGrouped;
