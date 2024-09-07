import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { formatNumber } from "../../../utils/formatters";
import LikePostButton from "../../CustomComponents/LikePostButton";
import ReactionsGroup from "../../CustomComponents/ReactionsGroup";
import { usePost } from "../../../Context/PostContext";

const PostLikeSection = () => {
  const theme = useTheme();

  const { post } = usePost();
  const reacted = post.user_reaction_type;
  const topReactions = post.reactions;

  // Calculate the total number of reactions
  const totalReactions = post.reactions.reduce((acc, reaction) => {
    return acc + reaction.count;
  }, 0);

  return (
    <Stack
      direction="row"
      spacing={1}
      alignContent={"center"}
      alignItems={"center"}
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        {reacted ? (
          <ReactionsGroup priorityReaction={reacted} reactions={topReactions} />
        ) : (
          <ReactionsGroup reactions={topReactions} />
        )}
        <Stack direction={"row"} alignItems={"center"} gap={0.5}>
          <LikePostButton />
          <Box component={"span"} fontSize={theme.typography.body1.fontSize}>
            {formatNumber(totalReactions)}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostLikeSection;
