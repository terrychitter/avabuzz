import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import AnimatedButton from "../AnimatedButton";
import Link from "../CustomLink";

const Startup = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        src="startup_video.mp4"
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
          zIndex: -3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(205, 101, 240, 0.3)", // Purple hue overlay
          zIndex: -1,
        }}
      />
      <Stack
        position={"absolute"}
        bottom={theme.spacing(3)}
        width={"min(90%, 500px)"}
        gap={theme.spacing(2)}
        textAlign={"center"}
      >
        <Link to="/login">
          <AnimatedButton
            fullWidth
            size="large"
            variant="outlined"
            sx={{
              color: theme.palette.common.white,
              borderColor: theme.palette.common.white,
              borderWidth: 1.5,
              fontSize: "1.2rem",
            }}
          >
            Login
          </AnimatedButton>
        </Link>
        <Link to="/create-account">
          <AnimatedButton
            fullWidth
            size="large"
            variant="outlined"
            sx={{
              color: theme.palette.common.white,
              borderColor: theme.palette.common.white,
              borderWidth: 1.5,
              fontSize: "1.2rem",
            }}
          >
            Create Account
          </AnimatedButton>
        </Link>
        <Link to="/home">
          <Typography color={"white"}>Skip for now</Typography>
        </Link>
      </Stack>
      <img
        src="icons/logo.png"
        alt="logo"
        style={{
          width: "min(50%, 300px)",
          position: "absolute",
          top: theme.spacing(3),
          margin: "auto",
        }}
      />
    </Box>
  );
};

export default Startup;
