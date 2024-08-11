import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/system";

interface NakedContentContainerProps {
  title: string;
  children?: React.ReactNode;
}

const NakedContentContainer: React.FC<NakedContentContainerProps> = ({
  title,
  children,
}) => {
  const theme = useTheme();
  return (
    <>
      <Box
        component={"header"}
        p={1}
        position={"sticky"}
        top={0}
        zIndex={100}
        sx={{
          backgroundColor: {
            xs: theme.palette.background.default,
            sm: theme.palette.background.paper,
          },
        }}
      >
        <Typography variant={"h6"} component={"h1"} fontWeight={"normal"}>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton onClick={() => window.history.back()}>
              <ArrowBack fontSize="inherit" />
            </IconButton>
            <Box flexGrow={1} textAlign={"center"} marginInlineEnd={5}>
              {title}
            </Box>
          </Stack>
        </Typography>
      </Box>
      <Box component={"main"} marginBlockStart={2} minHeight={"100vh"}>
        {children}
      </Box>
    </>
  );
};

export default NakedContentContainer;
