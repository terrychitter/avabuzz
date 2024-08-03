import { Avatar, AvatarGroup, useTheme } from "@mui/material";
import Link from "../CustomComponents/CustomLink";

const BadgeDisplay = () => {
  const theme = useTheme();

  const avatarStyles = {
    width: 30,
    height: 30,
    backgroundColor: theme.palette.common.white, // Use theme color for background
    border: `1px solid ${theme.palette.divider}`, // Optional border color from theme
  };

  return (
    <Link to="/my-items/badges">
      <AvatarGroup max={2} sx={{ marginBlockEnd: theme.spacing(1) }}>
        <Avatar
          alt="Ramen Badge"
          src="public/ramen_badge.png"
          sx={avatarStyles}
        />
        <Avatar
          alt="Salad Badge"
          src="public/salad_badge.png"
          sx={avatarStyles}
        />
      </AvatarGroup>
    </Link>
  );
};

export default BadgeDisplay;
