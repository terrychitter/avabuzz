import { Box, Stack, Typography, useTheme } from "@mui/material";
import { ArrowBack, Home } from "@mui/icons-material";
import Button from "./components/CustomComponents/AnimatedButton";
import Link from "./components/CustomComponents/CustomLink";

const NotFound = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: theme.spacing(2),
          left: theme.spacing(2),
          zIndex: 100,
        }}
      >
        <Button startIcon={<ArrowBack />} onClick={() => window.history.back()}>
          Go Back
        </Button>
      </Box>
      <Stack
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        gap={2}
      >
        <Stack direction={"column"} alignItems={"center"} gap={2}>
          <img src="/avabuzz_mascot/doughnut-11.png" width={"50%"}></img>
          <Stack gap={0} textAlign={"center"}>
            <Typography variant={"h4"} component={"h1"} fontWeight={"bold"}>
              404 Not Found
            </Typography>
            <Typography variant={"body1"} component={"p"}>
              The page you are looking for does not exist
            </Typography>
          </Stack>
        </Stack>
        <Link to="/">
          <Button variant="outlined" startIcon={<Home />}>
            Go Home
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default NotFound;
