import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import MuiLink from "@mui/material/Link";
import { LinkProps as MuiLinkProps } from "@mui/material/Link";

interface CustomLinkProps extends Omit<MuiLinkProps, "component" | "to"> {
  to: RouterLinkProps["to"];
  sx?: MuiLinkProps["sx"];
}

const Link: React.FC<CustomLinkProps> = ({ to, sx, ...muiLinkProps }) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      sx={{ color: "inherit", ...sx }}
      {...muiLinkProps}
    />
  );
};

export default Link;
