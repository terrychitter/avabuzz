import { Alert, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AppErrorPopupProps {
  message: string;
  duration?: number;
}

const AppErrorPopup: React.FC<AppErrorPopupProps> = ({
  message,
  duration = 5000,
}) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "-100%", x: "-50%", opacity: 0 }} // Start above the screen and invisible
          animate={{ y: 0, opacity: 1 }} // Animate into view
          exit={{ y: "-100%", opacity: 0 }} // Exit animation when unmounted
          transition={{ type: "spring", stiffness: 100, damping: 15 }} // Smooth spring animation
          style={{
            position: "fixed",
            top: theme.spacing(2),
            left: "50%",
            width: "min(90%, 500px)",
            zIndex: 9999,
          }}
        >
          <Alert variant="filled" severity="error">
            {message}
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppErrorPopup;
