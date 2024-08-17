import { Container, Skeleton, Stack } from "@mui/material";

const Debug = () => {
  return (
    <Container>
      <Stack direction={"column"} gap={1}>
        <Stack direction={"row"} width={"100%"} gap={1}>
          <Skeleton
            animation={"wave"}
            variant="circular"
            width={"50px"}
            height={"50px"}
          />
          <Stack direction={"column"}>
            <Skeleton
              variant="text"
              width={"150px"}
              sx={{ fontSize: "1rem" }}
            />
            <Skeleton
              variant="text"
              width={"100px"}
              sx={{ fontSize: "1rem" }}
            />
          </Stack>
        </Stack>
        <Skeleton animation={"wave"} variant="rounded" height={"200px"} />
      </Stack>
    </Container>
  );
};

export default Debug;
