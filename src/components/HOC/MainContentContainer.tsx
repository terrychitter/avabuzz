import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";

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
          borderRadius: theme.shape.borderRadius,
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
