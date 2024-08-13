import React, { useState } from "react";
import { Typography, Box, Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

interface PublicIdTagProps {
  children?: React.ReactNode;
}

const MotionPaper = motion(Paper);

const PublicIdTag: React.FC<PublicIdTagProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

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
              <IconCheck
                color={theme.palette.success.main}
                style={{ cursor: "pointer", marginLeft: 5 }}
                aria-label="Copied"
                size={"1rem"}
              />
            ) : (
              <IconCopy
                style={{ cursor: "pointer", marginLeft: 5 }}
                aria-label="Copy public ID"
                size={"1rem"}
              />
            )}
          </Tooltip>
        </Typography>
      </Box>
    </MotionPaper>
  );
};

export default PublicIdTag;
