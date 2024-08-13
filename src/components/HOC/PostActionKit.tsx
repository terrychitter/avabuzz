import { IconButton, Stack } from "@mui/material";
import { IconDotsVertical } from "@tabler/icons-react";
import Button from "../CustomComponents/AnimatedButton";

const PostActionKit = () => {
  return (
    <Stack direction={"row"} spacing={0} alignItems={"center"}>
      <Button size="small">Follow</Button>
      <IconButton aria-label="settings">
        <IconDotsVertical size={"1rem"} />
      </IconButton>
    </Stack>
  );
};

export default PostActionKit;
