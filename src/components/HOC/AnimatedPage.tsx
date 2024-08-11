import React from "react";

import { motion } from "framer-motion";
import { Box } from "@mui/material";

export interface AnimatedPageProps {
  children?: React.ReactNode;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      key="page"
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
      transition={{ delay: 0, duration: 0.3 }}
    >
      <Box width={"100%"}>{children}</Box>
    </motion.div>
  );
};

export default AnimatedPage;
