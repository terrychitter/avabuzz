import React from "react";
import { waveform, helix } from "ldrs";
import { Box, Stack, Typography } from "@mui/material";

interface DefaultLoaderProps {
  type?: string;
  loadingText?: string;
}

const DefaultLoader: React.FC<DefaultLoaderProps> = ({
  loadingText,
  type = "waveform",
}) => {
  waveform.register();
  helix.register();
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      gap={2}
    >
      {type === "waveform" && (
        <l-waveform size="35" stroke="3.5" speed="1" color="white"></l-waveform>
      )}

      {type === "helix" && (
        <l-helix size="45" speed="2.5" color="white"></l-helix>
      )}
      <Box>{loadingText && <Typography>{loadingText}</Typography>}</Box>
    </Stack>
  );
};

export default DefaultLoader;
