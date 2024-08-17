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

const Link: React.FC<CustomLinkProps> = ({
  to,
  sx,
  children,
  ...muiLinkProps
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // Stop propagation if the event is from an interactive child element
    if (event.target instanceof HTMLElement) {
      // Use event.currentTarget for the link element itself
      const closestInteractiveElement = event.target.closest(
        "[data-link-interactive]"
      );
      if (closestInteractiveElement) {
        event.stopPropagation();
      }
    }
  };

  return (
    <MuiLink
      component={RouterLink}
      to={to}
      sx={{ color: "inherit", ...sx }}
      onClick={handleClick}
      {...muiLinkProps}
    >
      {children}
    </MuiLink>
  );
};

export default Link;
