import React from "react";
import { waveform, helix } from "ldrs";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

  const theme = useTheme();

  const loaderColor = theme.palette.getContrastText(
    theme.palette.background.default
  );

  const waveFormSize = 35;
  const waveFormStroke = 3.5;
  const waveFormSpeed = 1;

  const helixSize = 45;
  const helixSpeed = 2.5;

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      gap={2}
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      sx={{
        transform: "translate(-50%, -50%)",
      }}
    >
      {type === "waveform" && (
        <l-waveform
          size={waveFormSize}
          stroke={waveFormStroke}
          speed={waveFormSpeed}
          color={loaderColor}
        ></l-waveform>
      )}

      {type === "helix" && (
        <l-helix
          size={helixSize}
          speed={helixSpeed}
          color={loaderColor}
        ></l-helix>
      )}
      <Box>{loadingText && <Typography>{loadingText}</Typography>}</Box>
    </Stack>
  );
};

export default DefaultLoader;
