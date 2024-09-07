import apiClient from "../apiClient";

const user = {
  "active": true,
  "active_accessories": {
      "active_badge_url": "https://placehold.co/400",
      "active_banner_url": "https://placehold.co/400",
      "active_profile_picture_border_url": "https://placehold.co/400"
  },
  "biography": "Smoke grass 🌲 eat ass 🍑",
  "birth_date": null,
  "country": "south-africa",
  "created_at": "Fri, 30 Aug 2024 14:29:51 GMT",
  "email": "ggl.avakin2@gmail.com",
  "friend_code": "ABC-DEF",
  "gender": "male",
  "orientation": "gay",
  "password_hash": "scrypt:32768:8:1$Adp1HSKnstMj17Im$7df270d3017a9cb31ddb83d5f54800d50e111241d5768cedba03e7d27e7b07633f0d91a6050c118028486b54c3bbb706e484663c049ab8db5f5ddd8210329ede",
  "private_user_id": "NITGW1FW0J",
  "profile_picture_url": "https://placehold.co/400",
  "public_user_id": "8N6-7HZ",
  "user_stats": {
      "follower_count": 0,
      "following_count": 1,
      "post_count": 1
  },
  "user_type": "user",
  "username": "txrry_x2"
}

// Fetch user function
export const fetchUser = async (publicUserId: string) => {
    if (import.meta.env.VITE_ENVIRONMENT === "development") {
      const response = await apiClient.get(`/users/${publicUserId}`);
    return response.data;
    } else {
      return user
    }
  };