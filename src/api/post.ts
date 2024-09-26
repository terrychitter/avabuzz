import { AxiosInstance } from "axios";

const posts = [
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
        url: "https://test_url",
      },
      {
        order: 1,
        size_bytes: 500,
        url: "https://test_url",
      },
    ],
    reactions: [
      {
        reaction_count: 0,
        reaction_type: "angry",
      },
      {
        reaction_count: 0,
        reaction_type: "cool",
      },
      {
        reaction_count: 0,
        reaction_type: "cry",
      },
      {
        reaction_count: 0,
        reaction_type: "laugh",
      },
      {
        reaction_count: 0,
        reaction_type: "like",
      },
      {
        reaction_count: 0,
        reaction_type: "love",
      },
      {
        reaction_count: 0,
        reaction_type: "shock",
      },
    ],
    type: "post",
    user: {
      active: true,
      active_accessories: {
        active_badge_url: "https://placehold.co/400",
        active_banner_url: "https://placehold.co/400",
        active_profile_picture_border_url: "https://placehold.co/400",
      },
      biography: null,
      birth_date: null,
      country: "None",
      created_at: "Fri, 30 Aug 2024 14:56:20 GMT",
      email: "chittert@gmail.com",
      friend_code: null,
      gender: "None",
      orientation: "None",
      password_hash:
        "scrypt:32768:8:1$tfyqscdYPsIQULy5$89b3f1e84b8fc6ee9034a17bbc4e84558cb5d8a898a024a02afdf6843a1da7d85d680bff296c71418274fc5b996e1b0c2419268ba65067923dcc4225c303addb",
      private_user_id: "N3RC6UGORW",
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
        url: "https://test_url",
      },
      {
        order: 1,
        size_bytes: 500,
        url: "https://test_url",
      },
    ],
    reactions: [
      {
        reaction_count: 0,
        reaction_type: "angry",
      },
      {
        reaction_count: 0,
        reaction_type: "cool",
      },
      {
        reaction_count: 0,
        reaction_type: "cry",
      },
      {
        reaction_count: 0,
        reaction_type: "laugh",
      },
      {
        reaction_count: 0,
        reaction_type: "like",
      },
      {
        reaction_count: 0,
        reaction_type: "love",
      },
      {
        reaction_count: 0,
        reaction_type: "shock",
      },
    ],
    type: "post",
    user: {
      active: true,
      active_accessories: {
        active_badge_url: "https://placehold.co/400",
        active_banner_url: "https://placehold.co/400",
        active_profile_picture_border_url: "https://placehold.co/400",
      },
      biography: null,
      birth_date: null,
      country: "None",
      created_at: "Fri, 30 Aug 2024 14:56:20 GMT",
      email: "chittert@gmail.com",
      friend_code: null,
      gender: "None",
      orientation: "None",
      password_hash:
        "scrypt:32768:8:1$tfyqscdYPsIQULy5$89b3f1e84b8fc6ee9034a17bbc4e84558cb5d8a898a024a02afdf6843a1da7d85d680bff296c71418274fc5b996e1b0c2419268ba65067923dcc4225c303addb",
      private_user_id: "N3RC6UGORW",
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
    view_count: 0,
  },
  {
    caption: "Me and my bestie 🫂",
    category: {
      description: "A Category for General Posts",
      id: 1,
      name: "General Posts",
    },
    created_at: "Fri, 30 Aug 2024 18:15:11 GMT",
    hashtags: ["besties", "awesome"],
    id: 55,
    media: [
      {
        order: 0,
        size_bytes: 500,
        url: "https://test_url",
      },
      {
        order: 1,
        size_bytes: 500,
        url: "https://test_url",
      },
    ],
    reactions: [
      {
        reaction_count: 0,
        reaction_type: "angry",
      },
      {
        reaction_count: 0,
        reaction_type: "cool",
      },
      {
        reaction_count: 0,
        reaction_type: "cry",
      },
      {
        reaction_count: 0,
        reaction_type: "laugh",
      },
      {
        reaction_count: 0,
        reaction_type: "like",
      },
      {
        reaction_count: 0,
        reaction_type: "love",
      },
      {
        reaction_count: 0,
        reaction_type: "shock",
      },
    ],
    type: "post",
    user: {
      active: true,
      active_accessories: {
        active_badge_url: "https://placehold.co/400",
        active_banner_url: "https://placehold.co/400",
        active_profile_picture_border_url: "https://placehold.co/400",
      },
      biography: "Smoke grass 🌲 eat ass 🍑",
      birth_date: null,
      country: "south-africa",
      created_at: "Fri, 30 Aug 2024 14:29:51 GMT",
      email: "ggl.avakin2@gmail.com",
      friend_code: "ABC-DEF",
      gender: "male",
      orientation: "gay",
      password_hash:
        "scrypt:32768:8:1$Adp1HSKnstMj17Im$7df270d3017a9cb31ddb83d5f54800d50e111241d5768cedba03e7d27e7b07633f0d91a6050c118028486b54c3bbb706e484663c049ab8db5f5ddd8210329ede",
      private_user_id: "NITGW1FW0J",
      profile_picture_url: "https://placehold.co/400",
      public_user_id: "8N6-7HZ",
      user_stats: {
        follower_count: 0,
        following_count: 1,
        post_count: 1,
      },
      user_type: "user",
      username: "txrry_x2",
    },
    view_count: 0,
  },
];

// Fetch post function
export const fetchUserPosts = async (apiClient: AxiosInstance, publicUserId: string) => {
  if (import.meta.env.VITE_ENVIRONMENT === "development") {
    const response = await apiClient.get(`/posts/${publicUserId}`);
    return response.data;
  } else {
    // Get posts using the publicUserId
    return posts.filter((post) => post.user.public_user_id === publicUserId);
  }
};
