import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  Stack,
} from "@mui/material";
import { ReactNode } from "react";
import CustomBackground from "./CustomBackground/CustomBackground";
import Logo from "./Logo";
import NavDrawer from "./NavDrawer";

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
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <CustomBackground />
      <Grid container minHeight={"100vh"}>
        {isMediumScreen && (
          // First grid item
          <Grid
            item
            textAlign={"center"}
            xs={12}
            md={7}
            sx={{
              height: "100vh",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: theme.spacing(5),
            }}
          >
            <Box>
              <Logo maxWidth="300px" width="100%" />
            </Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: "white",
              }}
            >
              {heroContent}
            </Typography>
          </Grid>
        )}
        {/* Second grid item */}
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              paddingBlock: theme.spacing(3),
              paddingInline: {
                xs: theme.spacing(3),
                sm: theme.spacing(15),
                md: theme.spacing(3),
                lg: theme.spacing(7),
              },
              minHeight: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: 0,
            }}
          >
            <Stack gap={2}>
              {!isMediumScreen && (
                <Box textAlign={"center"}>
                  <Logo maxWidth="200px" width="100%" />
                </Box>
              )}
              {formComponent}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthLayout;
