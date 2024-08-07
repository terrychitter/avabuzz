import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Stack } from "@mui/material";
import Button from "../CustomComponents/AnimatedButton";

const PostActionKit = () => {
  return (
    <Stack direction={"row"} spacing={0} alignItems={"center"}>
      <Button size="small">Follow</Button>
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    </Stack>
  );
};

export default PostActionKit;
