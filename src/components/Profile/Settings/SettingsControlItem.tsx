import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";

interface SettingsControlItemProps {
  title: string;
  controlItem: React.ReactNode;
}

const SettingsControlItem: React.FC<SettingsControlItemProps> = ({
  title,
  controlItem,
}) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingBlock={{ xs: 1, sm: 2 }}
    >
      <Typography
        component={"li"}
        color={theme.palette.text.primary}
        sx={{ listStyleType: "none" }}
      >
        {title}
      </Typography>
      {controlItem}
    </Stack>
  );
};

export default SettingsControlItem;
