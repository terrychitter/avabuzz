import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  useMediaQuery,
  useTheme,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Email from "@mui/icons-material/Email";
import Lock from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
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
        {/* Background Video */}
        <video
          src="./login_video.mp4"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
          }}
        />
        {/* Purple Hue Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(205, 101, 240, 0.5)",
            zIndex: -1,
          }}
        />
        {/* Gradient Overlay for Fade Effect */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(to ${
              isMediumScreen ? "right" : "bottom"
            }, rgba(0, 0, 0, 0.1) 0%, rgba(30, 30, 30, 1) 100%)`,
            zIndex: 0,
          }}
        />
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
          {/* Welcome Message */}
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
        {/* Logo as a Link */}
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
          height: isMediumScreen ? "100vh" : "60vh",
          backgroundColor: "#1e1e1e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            maxWidth: "400px",
            textAlign: "left",
            padding: theme.spacing(2),
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "white", marginBottom: theme.spacing(1) }}
          >
            Login
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "white", marginBottom: theme.spacing(3) }}
          >
            Sign in to continue
          </Typography>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email style={{ color: "white" }} />
                </InputAdornment>
              ),
              style: { color: "white" },
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: theme.palette.primary.main,
                },
              },
            }}
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel
              htmlFor="outlined-adornment-password"
              sx={{ color: "white" }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              startAdornment={
                <InputAdornment position="start">
                  <Lock style={{ color: "white" }} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    style={{ color: "white" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: theme.palette.primary.main,
                },
              }}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="body2" sx={{ color: "white" }}>
                I agree to the Terms and Conditions
              </Typography>
            }
            sx={{ marginBottom: theme.spacing(2) }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: theme.spacing(2) }}
          >
            Login
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: theme.spacing(2),
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white", marginRight: theme.spacing(1) }}
            >
              Don't have an account?
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "primary.main", cursor: "pointer" }}
              onClick={() => {
                // Handle sign-up navigation
              }}
            >
              Sign Up
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
