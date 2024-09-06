import { Stack, Typography, useTheme } from "@mui/material";
import { IconExclamationCircle, IconRotate } from "@tabler/icons-react";
import { FallbackProps } from "react-error-boundary";
import AnimatedIconButton from "../CustomComponents/AnimatedIconButton";

const AppErrorPage = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;
  const theme = useTheme();

  return (
    <>
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
          <IconExclamationCircle
            color={theme.palette.error.main}
            size={"5rem"}
          />
          <Stack gap={0} textAlign={"center"}>
            <Typography variant={"h4"} component={"h1"}>
              {error.message}
            </Typography>
          </Stack>
        </Stack>
        <AnimatedIconButton onClick={resetErrorBoundary}>
          <IconRotate color={theme.palette.text.primary} size={"2rem"} />
        </AnimatedIconButton>
      </Stack>
    </>
  );
};

export default AppErrorPage;
