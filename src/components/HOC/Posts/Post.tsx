import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  useTheme,
} from "@mui/material";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { formatDate } from "../../../utils/formatters";
import PostActionKit from "../PostActionKit";
import ProfilePictureKit from "../ProfilePictureKit";
import { ThemedContent } from "../ThemedContent";
import UsernameKit from "../UsernameKit";
import EventPost from "./EventPost";
import GeneralPost from "./GeneralPost";
import ImagePost from "./ImagePost";
import PostActions from "./PostActions";
import PostHashtagsGroup from "./PostHashtagsGroup";

export interface PostProps {
  post: {
    userPublicId: string;
    profilePictureUrl: string;
    profileBadgeUrl: string;
    postId: number;
    username: string;
    date: Date;
    type: string;
    event?: {
      title: string;
      startDate: Date;
      endDate: Date;
      bannerUrl: string;
    };
    text: string;
    hashtags: string[];
    viewCount: number;
    saved: boolean;
    reactCount: number;
    reactions: string[];
    userReaction: {
      reacted: boolean;
      reaction: string;
    };
    commentCount: number;
    mediaUrls: string[];
  };
}

// Define the type for the post
export interface PostType {
  userPublicId: string;
  profilePictureUrl: string;
  profileBadgeUrl: string;
  postId: number;
  username: string;
  date: Date;
  type: string;
  event?: {
    title: string;
    startDate: Date;
    endDate: Date;
    bannerUrl: string;
  };
  text: string;
  hashtags: string[];
  viewCount: number;
  saved: boolean;
  reactCount: number;
  reactions: string[];
  userReaction: {
    reacted: boolean;
    reaction: string;
  };
  commentCount: number;
  mediaUrls: string[];
}

const PostContext = createContext<
  | {
      post: PostType;
      setPost: React.Dispatch<React.SetStateAction<PostType>>;
    }
  | undefined
>(undefined);

export const PostProvider: React.FC<{
  value: {
    post: PostType;
    setPost: React.Dispatch<React.SetStateAction<PostType>>;
  };
  children: ReactNode;
}> = ({ value, children }) => {
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const theme = useTheme();

  const [currentPost, setCurrentPost] = useState(post);

  const DefaultPostLayout = () => {
    return (
      <Card variant="outlined" sx={{ minHeight: 150 }}>
        <CardHeader
          avatar={
            <ProfilePictureKit
              link={`/profile/${post.userPublicId}`}
              pictureWidth={{ xs: "3rem" }}
              pictureUrl={post.profilePictureUrl}
            />
          }
          title={
            <UsernameKit
              username={post.username}
              badgeUrl={post.profileBadgeUrl}
            />
          }
          action={<PostActionKit />}
          subheader={formatDate(post.date)}
        />
        <CardActionArea>
          <CardContent sx={{ padding: 0 }}>
            {post.type === "general" ? (
              <GeneralPost
                postText={post.text}
                link={`/posts/${post.postId.toString()}`}
              />
            ) : post.type === "image" ? (
              <ImagePost
                images={post.mediaUrls}
                postText={post.text}
                link={`/posts/${post.postId.toString()}`}
              />
            ) : null}
          </CardContent>
        </CardActionArea>
        <PostHashtagsGroup hashtags={post.hashtags} />
        <CardActions
          sx={{
            paddingInline: theme.spacing(2),
            justifyContent: "space-between",
          }}
        >
          <PostActions />
        </CardActions>
      </Card>
    );
  };

  return (
    <>
      <PostContext.Provider
        value={{ post: currentPost, setPost: setCurrentPost }}
      >
        {post.type !== "event" ? (
          <DefaultPostLayout />
        ) : (
          <ThemedContent imageUrl={post.event?.bannerUrl || ""}>
            <EventPost />
          </ThemedContent>
        )}
      </PostContext.Provider>
    </>
  );
};

export default Post;
