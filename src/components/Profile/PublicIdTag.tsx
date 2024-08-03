import React, { useState } from "react";
import { Typography, Box, Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";
import ContentCopy from "@mui/icons-material/ContentCopy";
import { motion } from "framer-motion";
import { Check } from "@mui/icons-material";

interface PublicIdTagProps {
  children?: React.ReactNode;
}

const MotionPaper = motion(Paper);

const PublicIdTag: React.FC<PublicIdTagProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = typeof children === "string" ? children : "";

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          alert("Copy failed!");
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          alert("Copy failed!");
        }
      } catch (err) {
        console.error("Failed to copy text: ", err);
        alert("Copy failed!");
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <MotionPaper
      sx={{
        padding: 1,
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleCopyClick}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component="span"
          sx={{ display: "flex", alignItems: "center" }}
        >
          {children}
          <Tooltip
            title={copied ? "Copied!" : "Copy public ID"}
            arrow
            enterDelay={500}
            leaveDelay={200}
          >
            {copied ? (
              <Check
                color="success"
                sx={{ fontSize: "inherit", marginLeft: 1 }}
              />
            ) : (
              <ContentCopy
                sx={{
                  cursor: "pointer",
                  marginLeft: 1,
                  fontSize: "inherit",
                }}
                aria-label="Copy public ID"
                titleAccess="Copy public ID"
              />
            )}
          </Tooltip>
        </Typography>
      </Box>
    </MotionPaper>
  );
};

export default PublicIdTag;
