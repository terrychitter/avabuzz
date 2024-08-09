import { Grid, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import theme from "../../theme/abz_dark_theme";
import Aside from "../CustomComponents/Aside";
import NavDrawer from "../CustomComponents/NavDrawer";

interface MainContentContainerProps {
  children?: React.ReactNode;
  sx?: any;
}

const MainContentContainer: React.FC<MainContentContainerProps> = ({
  children,
  sx,
}) => {
  // Get is small screen or larger
  const isSmallScreenOrLarger = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Container
        component={"main"}
        maxWidth={"lg"}
        sx={{
          padding: "0 !important",
          minHeight: "100vh",
          ...sx,
        }}
      >
        <Grid container gap={0}>
          <Grid
            item
            marginBlockStart={{ xs: 0, sm: 1 }}
            paddingInline={{ xs: 0, sm: 1 }}
            paddingBlock={{ xs: 0, sm: 1 }}
            borderRadius={{ xs: 0, sm: 1 }}
            xs={12}
            sm={8}
            md={8}
            sx={{
              backgroundColor: {
                sx: "transparent",
                md: theme.palette.background.paper,
              },
            }}
          >
            {children}
          </Grid>
          {isSmallScreenOrLarger && (
            // Aside Grid item
            <Grid
              item
              paddingInline={1}
              paddingBlock={1}
              paddingBlockStart={{ sm: 2, md: 1 }}
              borderRadius={1}
              xs={12}
              sm={4}
              md={4}
              sx={{
                position: "sticky",
                top: 0,
                alignSelf: "start",
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Aside />
            </Grid>
          )}
        </Grid>
        {!isSmallScreenOrLarger && <NavDrawer />}
      </Container>
    </>
  );
};

export default MainContentContainer;
