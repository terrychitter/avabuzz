import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  useTheme,
} from "@mui/material";
import React from "react";
import { PostProvider, PostType } from "../../../Context/PostContext";
import { formatDate } from "../../../utils/formatters";
import PostActionKit from "../PostActionKit";
import ProfilePictureKit from "../ProfilePictureKit";
import UsernameKit from "../UsernameKit";
import GeneralPost from "./GeneralPost";
import ImagePost from "./ImagePost";
import PostActions from "./PostActions";
import PostHashtagsGroup from "./PostHashtagsGroup";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const theme = useTheme();

  const DefaultPostLayout = () => {
    return (
      <Card variant="outlined" sx={{ minHeight: 150 }}>
        <CardHeader
          avatar={
            <ProfilePictureKit
              link={`/profile/${post.poster.public_user_id}`}
              pictureWidth={{ xs: "3rem" }}
              pictureUrl={post.poster.profile_picture_url}
            />
          }
          title={
            <UsernameKit
              username="fjnmdkdmn"
              badgeUrl={post.poster.active_accessories.active_badge_url}
            />
          }
          action={<PostActionKit />}
          subheader={formatDate(new Date(post.created_at))}
        />
        <CardContent sx={{ padding: 0 }}>
          {post.type === "post" ? (
            <GeneralPost
              postText={post.caption}
              link={`/posts/${post.id.toString()}`}
            />
          ) : post.type === "image" ? (
            <ImagePost
              images={post.media}
              postText={post.caption}
              link={`/posts/${post.id.toString()}`}
            />
          ) : null}
        </CardContent>
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
      <PostProvider postData={post}>
        <Box marginBlockEnd={1}>
          {
            post.type !== "event" ? <DefaultPostLayout /> : null
            // <ThemedContent imageUrl={post.event?.bannerUrl || ""}>
            //   <EventPost />
            // </ThemedContent>
          }
        </Box>
      </PostProvider>
    </>
  );
};

export default Post;
