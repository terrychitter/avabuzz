import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";

interface UsernameTagProps {
  children?: React.ReactNode;
}
const UsernameTag: React.FC<UsernameTagProps> = ({ children }) => {
  return (
    <Paper
      sx={{
        padding: 1,
        color: "white",
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>@{children}</Typography>
    </Paper>
  );
};

export default UsernameTag;
