import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLongPress } from "use-long-press";
import ReactionDialog from "./ReactionDialog";
import { usePost } from "../../Context/PostContext";
import { IconHeart } from "@tabler/icons-react";

const LikePostButton = () => {
  const { post } = usePost();
  const reacted = post.user_reaction_type;
  const [openReactionDialog, setOpenReactionDialog] = useState(false);

  const handleLike = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    navigator.vibrate(10);

    // updatePost((prevPost) => {
    //   return {
    //     ...prevPost,
    //     reactCount: prevPost.reactCount
    //       ? prevPost.reactCount + (userReacted ? -1 : 1)
    //       : 1,
    //     userReaction: {
    //       reacted: !userReacted,
    //       reaction: !userReacted ? "like" : "",
    //     },
    //   };
    // });
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
          animate={reacted ? { scale: [0.8, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleLike}
          {...bindLongPress()}
        >
          {!reacted && <IconHeart />}
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
