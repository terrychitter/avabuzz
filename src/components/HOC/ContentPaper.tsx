import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";
import React from "react";

interface ContentPaperProps {
  children?: React.ReactNode;
}
const ContentPaper: React.FC<ContentPaperProps> = ({ children }) => {
  const theme = useTheme();
  return <Paper sx={{ padding: theme.spacing(1) }}>{children}</Paper>;
};

export default ContentPaper;
