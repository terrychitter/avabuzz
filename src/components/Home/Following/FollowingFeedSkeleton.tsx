import { Skeleton, Stack } from "@mui/material";

const FollowingFeedSkeleton = () => {
  return (
    <Stack direction={"column"} gap={3}>
      <Stack gap={2}>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Skeleton variant="rounded" animation="wave" width={50} height={50} />
          <Stack direction={"column"}>
            <Skeleton variant="text" animation="wave" width={200} />
            <Skeleton variant="text" animation="wave" width={140} />
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Skeleton variant="rounded" animation="wave" width={50} height={50} />
          <Stack direction={"column"}>
            <Skeleton variant="text" animation="wave" width={200} />
            <Skeleton variant="text" animation="wave" width={140} />
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Skeleton variant="rounded" animation="wave" width={50} height={50} />
          <Stack direction={"column"}>
            <Skeleton variant="text" animation="wave" width={200} />
            <Skeleton variant="text" animation="wave" width={140} />
          </Stack>
        </Stack>
      </Stack>
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
    </Stack>
  );
};

export default FollowingFeedSkeleton;
