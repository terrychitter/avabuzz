import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

type MotionButtonProps = ButtonProps & HTMLMotionProps<"button">;

const MotionButton: React.FC<MotionButtonProps> = (props) => {
  return (
    <Button
      component={motion.button}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    />
  );
};

export default MotionButton;
