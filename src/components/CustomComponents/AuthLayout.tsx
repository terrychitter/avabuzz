import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import CustomBackground from "./CustomBackground/CustomBackground";

interface AuthLayoutProps {
  heroContent: ReactNode;
  formComponent: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  heroContent,
  formComponent,
}) => {
  // Use theme
  const theme = useTheme();

  // Media query for advanced media queries
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <CustomBackground />
      <Grid container minHeight={"100vh"}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            height: isLargeScreen ? "100vh" : "40vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isLargeScreen ? "flex-start" : "center",
            paddingLeft: isLargeScreen ? theme.spacing(5) : 0,
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: isLargeScreen ? "flex-start" : "center",
              width: "100%",
              paddingLeft: isLargeScreen ? theme.spacing(5) : 0,
            }}
          >
            <Typography
              variant={isLargeScreen ? "h2" : "h3"}
              component="h2"
              sx={{
                color: "white",
                textAlign: isLargeScreen ? "left" : "center",
              }}
            >
              {heroContent}
            </Typography>
          </Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              component="img"
              src="./logo.png"
              alt="Logo"
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 1,
                width: "auto",
                height: "50px",
              }}
            />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            minheight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              paddingBlock: theme.spacing(3),
              paddingInline: {
                xs: theme.spacing(2),
                sm: theme.spacing(8),
                md: theme.spacing(5),
                lg: theme.spacing(7),
              },
              width: {
                xs: "100%",
                sm: "80%",
                md: "100%",
                lg: "100%",
              },
              minHeight: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            {formComponent}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthLayout;
