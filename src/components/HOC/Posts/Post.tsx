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
import { IconEye, IconHeart, IconMessage } from "@tabler/icons-react";
import React from "react";
import Link from "../../CustomComponents/CustomLink";
import PostActionKit from "../PostActionKit";
import ProfilePictureKit from "../ProfilePictureKit";
import UsernameKit from "../UsernameKit";
import PostHashtagsGroup from "./PostHashtagsGroup";
import GeneralPost from "./GeneralPost";
import ImagePost from "./ImagePost";
import { format } from "date-fns";

interface PostProperties {
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
    likeCount: number;
    commentCount: number;
    mediaUrls: string[];
  };
}

const formatPostDate = (date: Date): string => {
  const postYear: number = date.getFullYear();
  const currentYear: number = new Date().getFullYear();

  if (postYear === currentYear) {
    return format(date, "dd MMM");
  } else {
    return format(date, "dd MMM yyyy");
  }
};

const formatNumber = (number: number) => {
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}M`.replace(/\.0$/, "");
  } else if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}K`.replace(/\.0$/, "");
  } else {
    return number.toString();
  }
};

const Post: React.FC<PostProperties> = ({ post }) => {
  const theme = useTheme();
  return (
    <Card variant="outlined" sx={{ minHeight: 150 }}>
      <Link to={`/profile/${post.userPublicId}`}>
        <CardHeader
          avatar={
            <ProfilePictureKit
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
          subheader={formatPostDate(post.date)}
        />
      </Link>
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
            <Box component={"span"} fontSize={theme.typography.body1.fontSize}>
              {formatNumber(post.commentCount)}
            </Box>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignContent={"center"}
            alignItems={"center"}
          >
            <IconHeart />
            <Box component={"span"} fontSize={theme.typography.body1.fontSize}>
              {formatNumber(post.likeCount)}
            </Box>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Post;
