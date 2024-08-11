import { Stack } from "@mui/material";
import React from "react";

interface SettingsLinkGroupProps {
  children?: React.ReactNode;
}

const SettingsLinkGroup: React.FC<SettingsLinkGroupProps> = ({ children }) => {
  return (
    <Stack
      direction={"column"}
      gap={2}
      component={"ul"}
      sx={{ paddingInlineStart: 0 }}
    >
      {children}
    </Stack>
  );
};

export default SettingsLinkGroup;
