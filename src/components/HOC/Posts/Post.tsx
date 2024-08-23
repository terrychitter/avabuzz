import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  useTheme,
} from "@mui/material";
import { IconEye, IconMessage } from "@tabler/icons-react";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { formatDate, formatNumber } from "../../../utils/formatters";
import Link from "../../CustomComponents/CustomLink";
import PostActionKit from "../PostActionKit";
import ProfilePictureKit from "../ProfilePictureKit";
import UsernameKit from "../UsernameKit";
import GeneralPost from "./GeneralPost";
import ImagePost from "./ImagePost";
import PostHashtagsGroup from "./PostHashtagsGroup";
import PostLikeSection from "./PostLikeSection";

export interface PostProps {
  post: {
    userPublicId: string;
    profilePictureUrl: string;
    profileBadgeUrl: string;
    postId: number;
    username: string;
    date: Date;
    type: string;
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

  return (
    <>
      <PostContext.Provider
        value={{ post: currentPost, setPost: setCurrentPost }}
      >
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
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
              gap={0.5}
            >
              <IconEye color={theme.palette.action.disabled} />
              <Box color={theme.palette.action.disabled}>
                {formatNumber(post.viewCount)}
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"end"}
              alignItems={"center"}
              alignContent={"center"}
              spacing={theme.spacing(2)}
            >
              <Stack
                direction="row"
                spacing={1}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Box marginBlockStart="7px !important">
                  <Link to={`/posts/${post.postId}#comments`}>
                    <IconMessage />
                  </Link>
                </Box>
                <Box
                  component={"span"}
                  fontSize={theme.typography.body1.fontSize}
                >
                  {formatNumber(post.commentCount)}
                </Box>
              </Stack>
              <PostLikeSection />
            </Stack>
          </CardActions>
        </Card>
      </PostContext.Provider>
    </>
  );
};

export default Post;
