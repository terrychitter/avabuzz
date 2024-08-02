import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { motion, MotionProps } from "framer-motion";

// Create a MotionButton by combining Button's props with MotionProps
const MotionButton = motion(Button) as React.FC<ButtonProps & MotionProps>;

const AnimatedButton: React.FC<ButtonProps & MotionProps> = (props) => {
  return (
    <MotionButton
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    />
  );
};

export default AnimatedButton;
