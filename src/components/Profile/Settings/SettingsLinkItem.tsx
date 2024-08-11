import React from "react";
import { Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useTheme } from "@mui/system";
import Link from "../../CustomComponents/CustomLink";

interface SettingsLinkItemProps {
  link: string;
  title: string;
}

const SettingsLinkItem: React.FC<SettingsLinkItemProps> = ({ link, title }) => {
  const theme = useTheme();

  return (
    <Link to={link}>
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
        <ArrowForward sx={{ color: theme.palette.text.primary }} />
      </Stack>
    </Link>
  );
};

export default SettingsLinkItem;
