import { Skeleton, Stack } from "@mui/material";
import { loadable } from "../../utils/loadable";
import { PostType } from "../../context/PostContext";

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

export const defaultPosts: PostType[] = [
  {
    caption: "Look at these cool pictures I took 📸",
    category: {
      description: "A Category for General Posts",
      id: 1,
      name: "General Posts",
    },
    created_at: "Fri, 30 Aug 2024 18:02:23 GMT",
    hashtags: ["avakinphotography2024"],
    id: 53,
    media: [
      {
        order: 0,
        size_bytes: 500,
        url: "https://picsum.photos/1000",
      },
      {
        order: 1,
        size_bytes: 500,
        url: "https://picsum.photos/1001",
      },
    ],
    poster: {
      active_accessories: {
        active_badge_url: "https://placehold.co/400",
        active_banner_url: "https://placehold.co/400",
        active_profile_picture_border_url: "https://placehold.co/400",
      },
      biography: null,
      birth_date: null,
      country: null,
      created_at: "Fri, 30 Aug 2024 14:56:20 GMT",
      email: "chittert@gmail.com",
      friend_code: null,
      gender: null,
      orientation: null,
      profile_picture_url: "https://placehold.co/400",
      public_user_id: "V6K-7V9",
      user_stats: {
        follower_count: 1,
        following_count: 0,
        post_count: 2,
      },
      user_type: "user",
      username: "txrry_x",
    },
    reactions: [
      {
        count: 0,
        type: "angry",
      },
      {
        count: 0,
        type: "cool",
      },
      {
        count: 0,
        type: "cry",
      },
      {
        count: 0,
        type: "laugh",
      },
      {
        count: 0,
        type: "like",
      },
      {
        count: 0,
        type: "love",
      },
      {
        count: 0,
        type: "shock",
      },
    ],
    type: "image",
    user_reaction_type: null,
    view_count: 0,
  },
  {
    caption: "Look at these cool pictures I took 📸",
    category: {
      description: "A Category for General Posts",
      id: 1,
      name: "General Posts",
    },
    created_at: "Fri, 30 Aug 2024 18:15:11 GMT",
    hashtags: ["avakinphotography2024"],
    id: 54,
    media: [
      {
        order: 0,
        size_bytes: 500,
        url: "https://picsum.photos/1002",
      },
      {
        order: 1,
        size_bytes: 500,
        url: "https://picsum.photos/1003",
      },
    ],
    poster: {
      active_accessories: {
        active_badge_url: "https://placehold.co/400",
        active_banner_url: "https://placehold.co/400",
        active_profile_picture_border_url: "https://placehold.co/400",
      },
      biography: null,
      birth_date: null,
      country: null,
      created_at: "Fri, 30 Aug 2024 14:56:20 GMT",
      email: "chittert@gmail.com",
      friend_code: null,
      gender: null,
      orientation: null,
      profile_picture_url: "https://placehold.co/400",
      public_user_id: "V6K-7V9",
      user_stats: {
        follower_count: 1,
        following_count: 0,
        post_count: 2,
      },
      user_type: "user",
      username: "txrry_x",
    },
    reactions: [
      {
        count: 0,
        type: "angry",
      },
      {
        count: 0,
        type: "cool",
      },
      {
        count: 0,
        type: "cry",
      },
      {
        count: 0,
        type: "laugh",
      },
      {
        count: 0,
        type: "like",
      },
      {
        count: 0,
        type: "love",
      },
      {
        count: 0,
        type: "shock",
      },
    ],
    type: "image",
    user_reaction_type: null,
    view_count: 0,
  },
  {
    caption: "# Hello World! 🌍",
    category: {
      description: "A Category for General Posts",
      id: 1,
      name: "General Posts",
    },
    created_at: "Sat, 07 Sep 2024 13:26:34 GMT",
    hashtags: ["myfistpost", "hello", "world"],
    id: 58,
    media: [],
    poster: {
      active_accessories: {
        active_badge_url: "https://placehold.co/400",
        active_banner_url: "https://placehold.co/400",
        active_profile_picture_border_url: "https://placehold.co/400",
      },
      biography: "# Hello World",
      birth_date: null,
      country: "south-africa",
      created_at: "Fri, 30 Aug 2024 14:29:51 GMT",
      email: "andries@gmail.com",
      friend_code: "ABC-D1S",
      gender: "male",
      orientation: "gay",
      profile_picture_url: "https://placehold.co/100",
      public_user_id: "8N6-7HZ",
      user_stats: {
        follower_count: 0,
        following_count: 1,
        post_count: 1,
      },
      user_type: "user",
      username: "mnr.andries",
    },
    reactions: [
      {
        count: 0,
        type: "angry",
      },
      {
        count: 0,
        type: "cool",
      },
      {
        count: 0,
        type: "cry",
      },
      {
        count: 0,
        type: "laugh",
      },
      {
        count: 0,
        type: "like",
      },
      {
        count: 1,
        type: "love",
      },
      {
        count: 0,
        type: "shock",
      },
    ],
    type: "post",
    user_reaction_type: "love",
    view_count: 0,
  },
];

interface SinglePostProps {
  post: PostType;
}
const SinglePost: React.FC<SinglePostProps> = loadable(
  () => import("./Posts/Post"),
  {
    fallback: <PostSkeleton />,
  }
);
interface PostListProps {
  posts?: PostType[];
}

const PostList: React.FC<PostListProps> = ({ posts = [] }) => {
  if (posts.length === 0) {
    return null;
  }

  const allPosts = posts?.map((post) => (
    <SinglePost key={post.id} post={post} />
  ));

  return <>{allPosts}</>;
};

export default PostList;
