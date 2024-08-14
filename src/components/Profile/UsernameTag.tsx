import { Box, Stack, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

interface UsernameTagProps {
  children?: React.ReactNode;
}
const UsernameTag: React.FC<UsernameTagProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"}>
      <Typography variant={"h5"}>@{children}</Typography>
      <Box
        marginBlockStart={theme.spacing(0.5)}
        marginInlineStart={theme.spacing(0.5)}
      >
        <img src={"/salad_badge.png"} width={20} height={20} />
      </Box>
    </Stack>
  );
};

export default UsernameTag;
