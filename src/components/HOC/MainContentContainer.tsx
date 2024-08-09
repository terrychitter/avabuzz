import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import Aside from "../CustomComponents/Aside";
import NavDrawer from "../CustomComponents/NavDrawer";
import theme from "../../theme/abz_dark_theme";

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
          <Grid item xs={12} sm={8} md={8}>
            {children}
          </Grid>
          {isSmallScreenOrLarger && (
            // Aside Grid item
            <Grid
              item
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
