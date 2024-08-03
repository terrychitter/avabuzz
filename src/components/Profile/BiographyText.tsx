import { Paper, Typography, Link, useTheme } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";

const BiographyText = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  // Toggle between full and truncated text
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const fullText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates at,
  deserunt reiciendis repellat inventore odit! Architecto perspiciatis
  eaque, odio maiores dicta nisi illo, aliquid vel consequuntur, minima
  explicabo consequatur nulla. Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Voluptates at, deserunt reiciendis repellat inventore
  odit! Architecto perspiciatis eaque, odio maiores dicta nisi illo, aliquid
  vel consequuntur, minima explicabo consequatur nulla.`;

  const truncatedText = fullText.slice(0, 200) + "...";

  return (
    <Paper variant="outlined" sx={{ padding: 2 }}>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: expanded ? "auto" : 50,
          opacity: expanded ? 1 : 0.5,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <Typography variant="body1">
          {expanded ? fullText : truncatedText}
        </Typography>
      </motion.div>
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
        {expanded ? "See Less" : "See More"}
      </Link>
    </Paper>
  );
};

export default BiographyText;
