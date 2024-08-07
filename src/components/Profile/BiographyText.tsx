import { Paper, Link, useTheme } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemedMarkdown from "../HOC/ThemedMarkdown";

const BiographyText = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  // Toggle between full and truncated text
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const fullText = `This is my awesome biography`;
  const maxLength = 400;
  const isTruncated = fullText.length > maxLength;
  const truncatedText = `${fullText.slice(0, maxLength)}`;

  return (
    <Paper sx={{ padding: 1, backgroundColor: "transparent !important" }}>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: expanded ? "auto" : 50,
          opacity: expanded ? 1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <ThemedMarkdown>{expanded ? fullText : truncatedText}</ThemedMarkdown>
      </motion.div>
      {isTruncated && (
        <Link
          component="button"
          variant="body2"
          onClick={handleToggle}
          sx={{
            display: "block",
            marginTop: theme.spacing(1),
            cursor: "pointer",
          }}
        >
          {expanded ? "See Less" : "See More..."}
        </Link>
      )}
    </Paper>
  );
};

export default BiographyText;
