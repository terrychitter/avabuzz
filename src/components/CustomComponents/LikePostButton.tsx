import { Box } from "@mui/material";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLongPress } from "use-long-press";
import ReactionDialog from "./ReactionDialog";

const LikePostButton = () => {
  const [liked, setLiked] = useState(false);
  const [openReactionDialog, setOpenReactionDialog] = useState(false);

  const handleLike = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    navigator.vibrate(10);
    setLiked((prevLiked) => !prevLiked);
  };

  const toggleReactionDialog = () => {
    setOpenReactionDialog((prevOpenReactionDialog) => !prevOpenReactionDialog);
  };

  const handleLongPress = useLongPress(() => {
    navigator.vibrate(10);
    toggleReactionDialog();
  });

  return (
    <>
      <Box paddingBlockStart={0.7}>
        <motion.div
          animate={liked ? { scale: [0.8, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleLike}
        >
          {liked ? (
            <IconHeartFilled color={"red"} />
          ) : (
            <IconHeart {...handleLongPress()} />
          )}
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
