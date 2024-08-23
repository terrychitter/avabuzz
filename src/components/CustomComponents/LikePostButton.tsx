import { Box } from "@mui/material";
import { IconHeart } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLongPress } from "use-long-press";
import { usePostContext } from "../HOC/Posts/Post";
import ReactionDialog from "./ReactionDialog";

const LikePostButton = () => {
  const { post, setPost } = usePostContext();
  const userReacted = post.userReaction.reacted;
  const [openReactionDialog, setOpenReactionDialog] = useState(false);

  const handleLike = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    navigator.vibrate(10);

    setPost((prevPost) => {
      return {
        ...prevPost,
        reactCount: prevPost.reactCount
          ? prevPost.reactCount + (userReacted ? -1 : 1)
          : 1,
        userReaction: {
          reacted: !userReacted,
          reaction: !userReacted ? "like" : "",
        },
      };
    });
  };

  const toggleReactionDialog = () => {
    setOpenReactionDialog((prevOpenReactionDialog) => !prevOpenReactionDialog);
  };

  const bindLongPress = useLongPress(() => {
    navigator.vibrate(10);
    toggleReactionDialog();
  });

  return (
    <>
      <Box paddingBlockStart={0.7}>
        <motion.div
          animate={userReacted ? { scale: [0.8, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleLike}
          {...bindLongPress()}
        >
          {!userReacted && <IconHeart />}
        </motion.div>
      </Box>
      <ReactionDialog
        open={openReactionDialog}
        onClose={toggleReactionDialog}
      />
    </>
  );
};

export default LikePostButton;
