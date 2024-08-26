import { Grid, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/system";
import React, { ReactElement } from "react";
import Aside from "../CustomComponents/Aside/Aside";
import CustomPullToRefresh from "../CustomComponents/CustomPullToRefresh";

interface MainContentContainerProps {
  children?: React.ReactNode;
  asideContent?: React.ReactNode;
  pullToRefresh?: boolean;
  sx?: any;
}

const MainContentContainer: React.FC<MainContentContainerProps> = ({
  children,
  asideContent,
  pullToRefresh = false,
  sx,
}) => {
  const theme = useTheme();
  const isSmallScreenOrLarger = useMediaQuery(theme.breakpoints.up("sm"));

  return (
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
          paddingBlockEnd={{ xs: 5, sm: 0 }}
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
          {pullToRefresh && children ? (
            <CustomPullToRefresh>
              {children as ReactElement}
            </CustomPullToRefresh>
          ) : (
            children
          )}
        </Grid>
        {isSmallScreenOrLarger && (
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
  );
};

export default MainContentContainer;
