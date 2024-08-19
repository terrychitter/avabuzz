import { Skeleton, Stack } from "@mui/material";
import { loadable } from "../../utils/loadable";
import type { HashtagProps } from "./Hashtags/Hashtag";

const HashtagSkeleton = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={2}>
      <Skeleton variant="rounded" width={50} height={50} />
      <Stack direction={"column"}>
        <Skeleton variant="text" width={200} />
        <Skeleton variant="text" width={140} />
      </Stack>
    </Stack>
  );
};

const Hashtag: React.FC<HashtagProps> = loadable(
  () => import("./Hashtags/Hashtag"),
  {
    fallback: <HashtagSkeleton />,
  }
);

const HashtagList = () => {
  const hashtags = [
    {
      hashtag: "grass",
      views: 100,
    },
    {
      hashtag: "tastes",
      views: 1000,
    },
    {
      hashtag: "bad",
      views: 1204,
    },
  ];

  const boxes = hashtags.map((hashtag) => (
    <Hashtag key={hashtag.hashtag} hashtag={hashtag} />
  ));
  return boxes;
};

export default HashtagList;
