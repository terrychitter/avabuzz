import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";
import {
  IconBookmark,
  IconDotsVertical,
  IconFlag3,
  IconShare,
} from "@tabler/icons-react";
import { useState } from "react";
import AnimatedButton from "../CustomComponents/AnimatedButton";

const PostActionKit = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const ShareButton = () => {
    return (
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <IconShare />
        Share
      </Box>
    );
  };

  const SaveButton = () => {
    return (
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <IconBookmark />
        Save
      </Box>
    );
  };

  const ReportButton = () => {
    const theme = useTheme();
    return (
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <IconFlag3 color={theme.palette.error.main} />
        <Box component={"span"} color={theme.palette.error.main}>
          Report
        </Box>
      </Box>
    );
  };

  return (
    <Stack direction={"row"} spacing={0} alignItems={"center"}>
      <AnimatedButton size="small">Follow</AnimatedButton>
      <IconButton aria-label="settings" onClick={handleMenuOpen}>
        <IconDotsVertical size={"1rem"} />
      </IconButton>
      <Menu
        id="post-action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "post-action-menu",
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <ShareButton />
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <SaveButton />
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ReportButton />
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default PostActionKit;
