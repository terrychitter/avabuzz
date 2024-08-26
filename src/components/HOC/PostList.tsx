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

export const posts = [
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
    saved: true,
    reactCount: 90000,
    commentCount: 10000,
    reactions: ["cool", "shock"],
    userReaction: {
      reacted: false,
      reaction: "",
    },
    mediaUrls: [],
  },
  {
    userPublicId: "XXX-XXX",
    profilePictureUrl: "/profile_picture.jpg",
    profileBadgeUrl: "/salad_badge.png",
    postId: 0,
    username: "terry",
    date: new Date(2024, 7, 24),
    type: "event",
    event: {
      title: "Salad Making Contest",
      startDate: new Date(2024, 7, 24),
      endDate: new Date(2024, 7, 25),
      bannerUrl:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWt4a3ZlbWk0bTJiaXV1amVydzVhaWRlbnhjbWs3dzJuZGQ1ODkxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bsfUpZfjw8pBr2QKUg/giphy.gif",
    },
    text: "# Let's make some salad!\nHere are the rules:\n1. No meat allowed.\n2. No dairy allowed.\n3. No nuts allowed.\n4. No gluten allowed.\n5. No fun allowed.\n\nThe winner gets a free salad! 🥗\nFor more details go [here](https://www.google.com)",
    hashtags: ["saladcompetition"],
    viewCount: 5293,
    saved: false,
    reactCount: 3529,
    commentCount: 402,
    reactions: ["love", "like"],
    userReaction: {
      reacted: false,
      reaction: "",
    },
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
    saved: false,
    reactCount: 320,
    commentCount: 45,
    reactions: ["cool", "love"],
    userReaction: {
      reacted: false,
      reaction: "love",
    },
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
    saved: true,
    reactCount: 1200,
    reactions: ["cry", "like"],
    userReaction: {
      reacted: true,
      reaction: "cry",
    },
    commentCount: 1200000,
    mediaUrls: ["https://picsum.photos/2000", "https://picsum.photos/2002"],
  },
];

const PostList = () => {
  const allPosts = posts.map((post) => <Post key={post.postId} post={post} />);
  return allPosts;
};

export default PostList;
