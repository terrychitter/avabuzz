import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Angry from "/post_reactions/angry.png";
import Cool from "/post_reactions/cool.png";
import Cry from "/post_reactions/cry.png";
import Laugh from "/post_reactions/laugh.png";
import Love from "/post_reactions/love.png";
import Shock from "/post_reactions/shock.png";
import { useState } from "react";

const reactions = [Love, Laugh, Cry, Shock, Cool, Angry];

const ReactionIcon = ({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setIsClicked(!isClicked);
    navigator.vibrate(10);
    controls.start({
      scale: isClicked ? 1 : 1.2,
      transition: { duration: 0.3 },
    });
    onClick(); // Close dialog when reaction is clicked
  };

  return (
    <motion.div
      animate={controls}
      initial={{ scale: 1 }}
      onClick={handleClick}
      style={{ display: "inline-block" }}
    >
      <img src={src} alt="Reaction" width={32} height={32} />
    </motion.div>
  );
};

const ReactionDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ padding: 0 }}
      PaperProps={{
        sx: {
          maxWidth: "none", // Allow the dialog to fit content width
          width: "auto", // Auto width to fit content
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
            {reactions.map((src, index) => (
              <motion.div
                key={src}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: index * 0.03, duration: 0.5 }}
                style={{ margin: 2 }} // Add margin for spacing
              >
                <ReactionIcon src={src} onClick={onClose} />{" "}
                {/* Pass onClose function */}
              </motion.div>
            ))}
          </AnimatePresence>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ReactionDialog;
