import React from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

type MotionIconButtonProps = IconButtonProps & HTMLMotionProps<"button">;

const MotionIconButton: React.FC<MotionIconButtonProps> = (props) => {
  return (
    <IconButton
      component={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    />
  );
};

export default MotionIconButton;
