import { Box, Stack, Typography } from "@mui/material";
import offlineImage from "/avabuzz_mascot/doughnut-12.png";
import { IconWifiOff } from "@tabler/icons-react";
import AnimatedButton from "./components/CustomComponents/AnimatedButton";

const OfflinePage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="100vh"
      width="100vw"
    >
      <Stack
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box position={"relative"}>
          <img src={offlineImage} alt="Offline" width="200" height="200" />
          <Box position={"absolute"} top={-25} left={0}>
            <IconWifiOff color="#F59B5D" size={"3rem"} />
          </Box>
        </Box>
        <Box>
          <Typography variant="h4">You are offline</Typography>
          <Typography variant="body1">
            Please check your internet connection
          </Typography>
        </Box>
        <AnimatedButton
          onClick={() => {
            window.location.reload();
          }}
        >
          Retry
        </AnimatedButton>
      </Stack>
    </Box>
  );
};

export default OfflinePage;
