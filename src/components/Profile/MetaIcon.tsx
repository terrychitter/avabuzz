import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

interface MetaIconProps {
  type: "country" | "sexuality" | "gender";
  children: React.ReactNode;
  variant?: "circular" | "rounded" | "square";
  width?: number;
  height?: number;
  placement?: "bottom" | "left" | "right" | "top";
  sx?: object;
  enterTouchDelay?: number;
  enterDelay?: number;
}

const MetaIcon: React.FC<MetaIconProps> = ({
  type,
  children,
  variant = "circular",
  width = 24,
  height = 24,
  placement = "top",
  sx = {},
  enterTouchDelay = 0,
  enterDelay = 0,
}) => {
  const basePath = {
    country: "/countries/",
    sexuality: "/sexualities/",
    gender: "/genders/",
  }[type];

  const imagePath = `${basePath}${children}.png`;

  console.log(imagePath);

  return (
    <Tooltip
      title={children}
      placement={placement}
      enterTouchDelay={enterTouchDelay}
      enterDelay={enterDelay}
    >
      <Avatar
        alt={`${children}`}
        src={imagePath}
        variant={variant}
        sx={{ width, height, ...sx }}
      ></Avatar>
    </Tooltip>
  );
};

export default MetaIcon;
