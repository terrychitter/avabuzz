import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { motion, MotionProps } from "framer-motion";
import React, { useState } from "react";
import AvakinLifeLogo from "/icons/avakin-logo.webp";

// Create a MotionBox type extending both MotionProps and the props of Box
type MotionBoxProps = MotionProps & React.ComponentProps<typeof Box>;

const MotionBox = motion(
  React.forwardRef<HTMLDivElement, MotionBoxProps>((props, ref) => (
    <Box {...props} ref={ref} />
  ))
); // Wrap Box with forwardRef and then with motion

interface FriendCodeTagProps {
  code?: string | null;
}

const FriendCodeTag: React.FC<FriendCodeTagProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  const handleCopyClick = () => {
    const textToCopy = typeof code === "string" ? code : "";

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
    <>
      {code && (
        <Stack direction={"row"} gap={theme.spacing(1)} alignItems={"center"}>
          <Box>
            <img
              src={AvakinLifeLogo}
              alt="Avakin Life"
              style={{ width: "1rem", height: "1.2rem", marginBlockStart: 4 }}
            />
          </Box>
          <MotionBox
            sx={{
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
                {code}
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
          </MotionBox>
        </Stack>
      )}
    </>
  );
};

export default FriendCodeTag;
