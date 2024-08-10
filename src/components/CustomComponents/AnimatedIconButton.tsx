import React from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { motion, MotionProps } from "framer-motion";

// Create a MotionIconButton by combining Button's props with MotionProps
const MotionIconButton = motion(IconButton) as React.FC<
  IconButtonProps & MotionProps
>;

const AnimatedIconButton: React.FC<IconButtonProps & MotionProps> = (props) => {
  return (
    <MotionIconButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    />
  );
};

export default AnimatedIconButton;
