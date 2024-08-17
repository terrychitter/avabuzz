import { Skeleton, Stack } from "@mui/material";
import { loadable } from "../../utils/loadable";
import type { PostProps } from "./Posts/Post";

const PostSkeleton = () => {
  return (
    <Stack direction={"column"} gap={1}>
      <Stack direction={"row"} width={"100%"} gap={1}>
        <Skeleton
          animation={"wave"}
          variant="circular"
          width={"50px"}
          height={"50px"}
        />
        <Stack direction={"column"}>
          <Skeleton variant="text" width={"150px"} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={"100px"} sx={{ fontSize: "1rem" }} />
        </Stack>
      </Stack>
      <Skeleton animation={"wave"} variant="rounded" height={"200px"} />
    </Stack>
  );
};

// Explicitly type the Post component to inform TypeScript about its expected props
const Post: React.FC<PostProps> = loadable(() => import("./Posts/Post"), {
  fallback: <PostSkeleton />,
});

const PostList = () => {
  const posts = [
    {
      userPublicId: "XXX-XXX",
      profilePictureUrl: "/profile_picture.jpg",
      profileBadgeUrl: "/salad_badge.png",
      postId: 0,
      username: "terry",
      date: new Date(2024, 7, 24),
      type: "general",
      text: "# Grass tastes bad.",
      hashtags: ["grass", "tastes", "bad"],
      viewCount: 100,
      likeCount: 10,
      commentCount: 5,
      mediaUrls: [],
    },
    {
      userPublicId: "AAA-AAA",
      profilePictureUrl: "/profile_picture.jpg",
      profileBadgeUrl: "/salad_badge.png",
      postId: 1,
      username: "mnr.andries69",
      date: new Date(2023, 7, 24),
      type: "image",
      text: "Look at this cool salad!",
      hashtags: ["mmmmmm", "salad"],
      viewCount: 1000,
      likeCount: 320,
      commentCount: 45,
      mediaUrls: ["https://picsum.photos/1000"],
    },
    {
      userPublicId: "AAA-AAA",
      profilePictureUrl: "/profile_picture.jpg",
      profileBadgeUrl: "/salad_badge.png",
      postId: 1,
      username: "jeff",
      date: new Date(2023, 7, 24),
      type: "image",
      text: "Random Pictures I took today.📷 ",
      hashtags: ["random", "pictures"],
      viewCount: 1520,
      likeCount: 1200,
      commentCount: 1200000,
      mediaUrls: [
        "https://picsum.photos/2000",
        "https://picsum.photos/2002",
        "https://picsum.photos/2001",
        "https://picsum.photos/2003",
      ],
    },
  ];

  const boxes = posts.map((post) => <Post key={post.postId} post={post} />);
  return boxes;
};

export default PostList;
