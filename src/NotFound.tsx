import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { IconArrowLeft, IconHomeFilled } from "@tabler/icons-react";
import AnimatedIconButton from "./components/CustomComponents/AnimatedIconButton";
import Link from "./components/CustomComponents/CustomLink";
import mascotImage from "/avabuzz_mascot/doughnut-11.png";

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
        <AnimatedIconButton onClick={() => window.history.back()}>
          <IconArrowLeft color={theme.palette.text.primary} />
        </AnimatedIconButton>
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
          <img src={mascotImage} width={"50%"} />
          <Stack gap={0} textAlign={"center"}>
            <Typography variant={"h4"} component={"h1"} fontWeight={"bold"}>
              404 Not Found
            </Typography>
            <Typography variant={"body1"} component={"p"}>
              The page you are looking for does not exist
            </Typography>
          </Stack>
        </Stack>
        <IconButton>
          <Link to="/home">
            <IconHomeFilled
              color={theme.palette.primary.main}
              size={theme.typography.h2.fontSize}
            />
          </Link>
        </IconButton>
      </Stack>
    </>
  );
};

export default NotFound;
