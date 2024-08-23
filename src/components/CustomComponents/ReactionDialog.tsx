import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { usePostContext } from "../HOC/Posts/Post";
import Angry from "/post_reactions/angry.png";
import Cool from "/post_reactions/cool.png";
import Cry from "/post_reactions/cry.png";
import Laugh from "/post_reactions/laugh.png";
import Love from "/post_reactions/love.png";
import Shock from "/post_reactions/shock.png";

const reactions = [
  { src: Angry, name: "angry" },
  { src: Cool, name: "cool" },
  { src: Cry, name: "cry" },
  { src: Laugh, name: "laugh" },
  { src: Love, name: "love" },
  { src: Shock, name: "shock" },
];

const ReactionDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  // Get the post context
  const { setPost } = usePostContext();

  const ReactionIcon = ({
    src,
    onReactionClick,
  }: {
    src: string;
    onReactionClick: () => void;
  }) => {
    return (
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        onClick={onReactionClick}
        style={{ display: "inline-block", cursor: "pointer" }}
      >
        <img src={src} alt="Reaction" width={32} height={32} />
      </motion.div>
    );
  };

  const handleReactionClick = (name: string) => {
    navigator.vibrate(10);

    // Update the post context
    setPost((prevPost) => ({
      ...prevPost,
      userReaction: {
        reacted: true,
        reaction: name,
      },
      reactCount: prevPost.reactCount ? prevPost.reactCount + 1 : 1,
    }));

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ padding: 0 }}
      PaperProps={{
        sx: {
          maxWidth: "none",
          width: "auto",
        },
      }}
    >
      <DialogTitle>Choose Reaction</DialogTitle>
      <DialogContent sx={{ padding: 1 }}>
        <Stack
          direction="row"
          gap={1}
          overflow="hidden" // Prevent overflow
          justifyContent="center"
          alignItems="center"
          height={50}
          paddingInline={2}
          sx={{ flexWrap: "wrap" }}
        >
          <AnimatePresence>
            {reactions.map((reaction, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: index * 0.03, duration: 0.5 }}
                style={{ margin: 2 }}
              >
                <ReactionIcon
                  src={reaction.src}
                  onReactionClick={() => handleReactionClick(reaction.name)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ReactionDialog;
