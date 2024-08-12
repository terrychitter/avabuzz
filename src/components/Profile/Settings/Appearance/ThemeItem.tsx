import { CheckCircle } from "@mui/icons-material";
import { Avatar, Chip, Stack, Typography } from "@mui/material";
import React from "react";

interface ThemeItemProps {
  active?: boolean;
}

const ThemeItem: React.FC<ThemeItemProps> = ({ active = true }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack direction={"row"} gap={2}>
        <Avatar src="/avabuzz_mascot/doughnut-7.png"></Avatar>
        <Stack direction={"column"}>
          <Typography fontWeight={550}>Default Avabuzz Theme</Typography>
          <Chip label="DARK" size="small" />
        </Stack>
      </Stack>
      {active && <CheckCircle color="success" />}
    </Stack>
  );
};

export default ThemeItem;
