import { Box, Stack, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

interface UsernameTagProps {
  username: string;
  badgeUrl: string;
}
const UsernameTag: React.FC<UsernameTagProps> = ({ username, badgeUrl }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"}>
      <Typography variant={"h5"}>@{username}</Typography>
      <Box
        marginBlockStart={theme.spacing(0.5)}
        marginInlineStart={theme.spacing(0.5)}
      >
        {badgeUrl && <img src={badgeUrl} width={20} height={20} />}
      </Box>
    </Stack>
  );
};

export default UsernameTag;
