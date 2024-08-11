import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface SettingsLinkGroupProps {
  heading?: string;
  children?: React.ReactNode;
}

const SettingsLinkGroup: React.FC<SettingsLinkGroupProps> = ({
  children,
  heading,
}) => {
  return (
    <Box>
      {heading && (
        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
          {heading}
        </Typography>
      )}
      <Stack
        direction={"column"}
        gap={2}
        component={"ul"}
        sx={{ paddingInlineStart: 0 }}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default SettingsLinkGroup;
