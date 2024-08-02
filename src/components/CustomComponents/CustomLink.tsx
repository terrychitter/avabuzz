import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import MuiLink from "@mui/material/Link";
import { LinkProps as MuiLinkProps } from "@mui/material/Link";

interface CustomLinkProps extends Omit<MuiLinkProps, "component" | "to"> {
  to: RouterLinkProps["to"];
}

const Link: React.FC<CustomLinkProps> = ({ to, ...muiLinkProps }) => {
  return <MuiLink component={RouterLink} to={to} {...muiLinkProps} />;
};

export default Link;
