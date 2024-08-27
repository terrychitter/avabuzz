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
    userPublicId: "AAA-AAA",
    profilePictureUrl: "/profile_picture.jpg",
    profileBadgeUrl: "/salad_badge.png",
    postId: 0,
    username: "txrry_x",
    date: new Date(2023, 7, 24),
    type: "image",
    text: "Me and Mel 😎",
    hashtags: ["bff", "besties"],
    viewCount: 1000,
    saved: false,
    reactCount: 320,
    commentCount: 45,
    reactions: ["cool", "love"],
    userReaction: {
      reacted: false,
      reaction: "",
    },
    mediaUrls: ["/bestie.png"],
  },
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
      status: "ended",
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
  {
    userPublicId: "XXX-XXX",
    profilePictureUrl: "/profile_picture.jpg",
    profileBadgeUrl: "/salad_badge.png",
    postId: 1,
    username: "terry",
    date: new Date(2024, 8, 1),
    type: "event",
    event: {
      title: "Vegan Dessert Challenge",
      startDate: new Date(2024, 8, 1),
      endDate: new Date(2024, 8, 2),
      status: "ongoing",
      bannerUrl:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTdpOTM0M2ExNHMwZ3RpZThkNWFsb201cXd0bzdxNnY0dTY5cmZmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MCnHCAjsYbIYl5Yf9I/giphy.gif",
    },
    text: "# Whip up some sweetness!\nHere are the rules:\n1. No animal products.\n2. Must be under 200 calories per serving.\n3. Must be sugar-free.\n\nWinner gets a free vegan dessert cookbook! 🍰\nFor more details go [here](https://www.google.com)",
    hashtags: ["vegandessert"],
    viewCount: 4210,
    saved: true,
    reactCount: 2987,
    commentCount: 312,
    reactions: ["love", "like", "cool"],
    userReaction: {
      reacted: true,
      reaction: "like",
    },
    mediaUrls: [],
  },
  {
    userPublicId: "XXX-XXX",
    profilePictureUrl: "/profile_picture.jpg",
    profileBadgeUrl: "/salad_badge.png",
    postId: 2,
    username: "terry",
    date: new Date(2024, 8, 7),
    type: "event",
    event: {
      title: "Smoothie Making Marathon",
      startDate: new Date(2024, 8, 7),
      endDate: new Date(2024, 8, 8),
      status: "ongoing",
      bannerUrl:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnlsazJjYXhncWc3Y3RkNmR2bmFkMnhlM2FlY3RxYjM0OXBlNGMxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiQytOEqr2U33lYkg/giphy.gif",
    },
    text: "# Blend it up!\nRules:\n1. No added sugars.\n2. Must use at least 3 different fruits.\n3. Must be green in color.\n\nWinner gets a free blender! 🍹\nFor more details go [here](https://www.google.com)",
    hashtags: ["smoothiemarathon"],
    viewCount: 3765,
    saved: false,
    reactCount: 2345,
    commentCount: 270,
    reactions: ["like", "cool"],
    userReaction: {
      reacted: true,
      reaction: "cool",
    },
    mediaUrls: [],
  },
  {
    userPublicId: "XXX-XXX",
    profilePictureUrl: "/profile_picture.jpg",
    profileBadgeUrl: "/salad_badge.png",
    postId: 3,
    username: "terry",
    date: new Date(2024, 8, 14),
    type: "event",
    event: {
      title: "Fruit Carving Competition",
      startDate: new Date(2024, 8, 14),
      endDate: new Date(2024, 8, 15),
      status: "ongoing",
      bannerUrl:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXIycWxpOGQwMWNua3pjMDFianZxenYzMXdsb29keHQ4cjEwdXJ5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lojcMSaiZ3kIntMHPk/giphy.gif",
    },
    text: "# Show off your skills!\nHere are the rules:\n1. Only fruits allowed.\n2. No external tools other than knives.\n3. Must create a recognizable shape.\n\nWinner gets a free fruit carving set! 🍉\nFor more details go [here](https://www.google.com)",
    hashtags: ["fruitcarving"],
    viewCount: 4890,
    saved: true,
    reactCount: 3187,
    commentCount: 389,
    reactions: ["love", "like", "cool", "shock"],
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
    postId: 4,
    username: "terry",
    date: new Date(2024, 8, 21),
    type: "event",
    event: {
      title: "Best Avocado Toast Contest",
      startDate: new Date(2024, 8, 21),
      endDate: new Date(2024, 8, 22),
      status: "ongoing",
      bannerUrl:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGVoeXVwdTdxaXpnMWgyZmY2Ympid2Nrd2k3ZG50MWxuZHE3a3p0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bufB2gMeaRFfumY/giphy.gif",
    },
    text: "# Toast to perfection!\nHere are the rules:\n1. Avocado must be the main ingredient.\n2. No dairy products.\n3. Must be served on whole grain bread.\n\nWinner gets a year's supply of avocados! 🥑\nFor more details go [here](https://www.google.com)",
    hashtags: ["avocadotoast"],
    viewCount: 3124,
    saved: false,
    reactCount: 2213,
    commentCount: 198,
    reactions: ["like", "cool", "love"],
    userReaction: {
      reacted: true,
      reaction: "love",
    },
    mediaUrls: [],
  },
  {
    userPublicId: "XXX-XXX",
    profilePictureUrl: "/profile_picture.jpg",
    profileBadgeUrl: "/salad_badge.png",
    postId: 5,
    username: "terry",
    date: new Date(2024, 8, 28),
    type: "event",
    event: {
      title: "Creative Salad Dressing Contest",
      startDate: new Date(2024, 8, 28),
      endDate: new Date(2024, 8, 29),
      status: "ongoing",
      bannerUrl:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTV3NHA5ZzNjY2NzY3lhejBsM3gwNDBwaHVoNjIxaDZnNXVrdnNkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3PVoBMTySLbtcaQap2/giphy-downsized-large.gif",
    },
    text: "# Get saucy!\nRules:\n1. Must use at least 5 ingredients.\n2. No artificial flavors.\n3. Must complement a green salad.\n\nWinner gets a year's supply of gourmet olive oil! 🥗\nFor more details go [here](https://www.google.com)",
    hashtags: ["saladdressing"],
    viewCount: 2765,
    saved: true,
    reactCount: 1934,
    commentCount: 145,
    reactions: ["like", "cool", "shock"],
    userReaction: {
      reacted: false,
      reaction: "",
    },
    mediaUrls: [],
  },
];

const PostList = () => {
  const allPosts = posts.map((post) => <Post key={post.postId} post={post} />);
  return allPosts;
};

export default PostList;
