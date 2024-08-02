import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
  Paper,
} from "@mui/material";
import LoginForm from "../CustomComponents/LoginForm";
import { Link } from "react-router-dom";
import CustomBackground from "../CustomComponents/CustomBackground/CustomBackground";

const Login = () => {
  // Use theme
  const theme = useTheme();

  // Media query for advanced media queries
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  // Login page background
  const LoginBackGround = styled(Box)(() => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    background: isMediumScreen
      ? "linear-gradient(90deg, rgba(230,109,163,1) 0%, rgba(205,101,240,1) 28%, rgba(30,30,30,1) 60%)"
      : "linear-gradient(180deg, rgba(230,109,163,1) 3%, rgba(205,101,240,1) 17%, rgba(30,30,30,1) 40%)",
  }));

  return (
    <>
      <CustomBackground />
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            height: isMediumScreen ? "100vh" : "40vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMediumScreen ? "flex-start" : "center",
            paddingLeft: isMediumScreen ? theme.spacing(5) : 0,
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: isMediumScreen ? "flex-start" : "center",
              width: "100%",
              paddingLeft: isMediumScreen ? theme.spacing(5) : 0,
            }}
          >
            <Typography
              variant={isMediumScreen ? "h2" : "h3"}
              component="h2"
              sx={{
                color: "white",
                textAlign: isMediumScreen ? "left" : "center",
              }}
            >
              Welcome Back
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
        {/* Login section */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            height: isMediumScreen ? "100vh" : "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Login form */}
          <Paper
            sx={{
              padding: isSmallScreen ? theme.spacing(4) : theme.spacing(6),
              width: isSmallScreen ? "100%" : "80%",
              minHeight: isSmallScreen ? "110%" : "auto",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <LoginForm />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
