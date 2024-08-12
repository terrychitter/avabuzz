import { SwipeableDrawer, useTheme } from "@mui/material";
import { Fab } from "@mui/material";
import React from "react";
import Aside from "./Aside/Aside";
import { Menu } from "@mui/icons-material";

interface NavDrawerProps {
  content?: React.ReactNode;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ content }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Fab
        color="primary"
        onClick={toggleDrawer(true)}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: theme.zIndex.speedDial,
        }}
      >
        <Menu />
      </Fab>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          style: {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Aside>{content}</Aside>
      </SwipeableDrawer>
    </>
  );
};

export default NavDrawer;
