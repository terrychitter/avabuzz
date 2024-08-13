import { Grid, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { useTheme } from "@mui/system";
import Aside from "../CustomComponents/Aside/Aside";
import NavDrawer from "../CustomComponents/NavDrawer";

interface MainContentContainerProps {
  children?: React.ReactNode;
  asideContent?: React.ReactNode;
  sx?: any;
}

const MainContentContainer: React.FC<MainContentContainerProps> = ({
  children,
  asideContent,
  sx,
}) => {
  const theme = useTheme();
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
            paddingInline={{ xs: 0, sm: 1 }}
            borderRadius={{ xs: 0, sm: 1 }}
            xs={12}
            sm={8}
            md={8}
            sx={{
              backgroundColor: {
                sx: "transparent",
                sm: theme.palette.custom.darkerBlack,
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
              <Aside>{asideContent}</Aside>
            </Grid>
          )}
        </Grid>
      </Container>
      {!isSmallScreenOrLarger && <NavDrawer content={asideContent} />}
    </>
  );
};

export default MainContentContainer;
