import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

interface MainContentContainerProps {
  children?: React.ReactNode;
  sx?: any;
}

const MainContentContainer: React.FC<MainContentContainerProps> = ({
  children,
  sx,
}) => {
  const theme = useTheme();
  return (
    <>
      <Container
        component={"main"}
        maxWidth={"md"}
        sx={{
          padding: "0 !important",
          minHeight: "100vh",
          backgroundColor: theme.palette.custom.lightBlack,
          ...sx,
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default MainContentContainer;
