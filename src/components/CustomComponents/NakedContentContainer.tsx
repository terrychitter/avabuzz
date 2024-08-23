import { Box, IconButton, Stack, Typography } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { useTheme } from "@mui/system";
import React from "react";

interface NakedContentContainerProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  headerContent?: React.ReactNode;
}

const NakedContentContainer: React.FC<NakedContentContainerProps> = ({
  title,
  children,
  headerContent,
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
            sm: "inherit",
          },
        }}
      >
        <Typography variant={"h6"} component={"h1"} fontWeight={"normal"}>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton onClick={() => window.history.back()}>
              <IconArrowLeft />
            </IconButton>
            <Box flexGrow={1} marginInlineEnd={5} justifyContent={"center"}>
              {title}
            </Box>
          </Stack>
        </Typography>
      </Box>
      <Box paddingInline={theme.spacing(2)}>{headerContent}</Box>
      <Box component={"main"} marginBlockStart={2}>
        {children}
      </Box>
    </>
  );
};

export default NakedContentContainer;
