import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";
import React from "react";

interface ContentPaperProps {
  children?: React.ReactNode;
  sx?: any;
}

const ContentPaper: React.FC<ContentPaperProps> = ({ children, sx }) => {
  const theme = useTheme();
  return <Paper sx={{ padding: theme.spacing(1), ...sx }}>{children}</Paper>;
};

export default ContentPaper;
