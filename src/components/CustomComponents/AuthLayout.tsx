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
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <CustomBackground />
      <Grid container minHeight={"100vh"}>
        {isLargeScreen && (
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              height: "100vh",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: theme.spacing(5),
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
                paddingLeft: theme.spacing(5),
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: "white",
                  textAlign: "left",
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
        )}
        <Grid
          item
          xs={12}
          md={isLargeScreen ? 5 : 12}
          sx={{
            minHeight: "100vh",
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
              borderRadius: 0, // Remove rounding on all screen sizes
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
