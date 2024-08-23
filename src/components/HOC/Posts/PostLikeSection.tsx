import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { formatNumber } from "../../../utils/formatters";
import LikePostButton from "../../CustomComponents/LikePostButton";
import ReactionsGroup from "../../CustomComponents/ReactionsGroup";
import { usePostContext } from "./Post";

const PostLikeSection = () => {
  const theme = useTheme();

  const { post } = usePostContext();
  const reactCount = post.reactCount;
  const reacted = post.userReaction.reacted;
  const topReactions = post.reactions;

  return (
    <Stack
      direction="row"
      spacing={1}
      alignContent={"center"}
      alignItems={"center"}
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        {!reacted ? (
          <ReactionsGroup reactions={topReactions} />
        ) : (
          <ReactionsGroup
            priorityReaction={post.userReaction.reaction}
            reactions={topReactions}
          />
        )}
        <Stack direction={"row"} alignItems={"center"} gap={0.5}>
          <LikePostButton />
          <Box component={"span"} fontSize={theme.typography.body1.fontSize}>
            {formatNumber(reactCount)}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostLikeSection;
