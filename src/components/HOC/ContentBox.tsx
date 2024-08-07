import { Box, useTheme } from "@mui/material";
import React from "react";

interface ContentBoxProps {
  children?: React.ReactNode;
  sx?: any;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children, sx }) => {
  const theme = useTheme();
  return <Box sx={{ padding: theme.spacing(1), ...sx }}>{children}</Box>;
};

export default ContentBox;
