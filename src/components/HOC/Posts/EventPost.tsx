import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { IconConfetti } from "@tabler/icons-react";
import Link from "../../CustomComponents/CustomLink";
import ThemedMarkdown from "../ThemedMarkdown";
import { usePostContext } from "./Post";
import PostActions from "./PostActions";
import PostActionKit from "../PostActionKit";
import ProfilePictureKit from "../ProfilePictureKit";
import UsernameKit from "../UsernameKit";
import { formatDate } from "../../../utils/formatters";
import PostHashtagsGroup from "./PostHashtagsGroup";

const EventPost = () => {
  const theme = useTheme();
  const { post } = usePostContext();
  return (
    <>
      <Chip
        label={"Event"}
        color={"primary"}
        size="small"
        sx={{
          marginInlineStart: theme.spacing(1.7),
          borderRadius: "10px",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
      <Card
        variant="outlined"
        sx={{
          minHeight: 150,
          borderColor: theme.palette.primary.main,
        }}
      >
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
        <CardContent
          sx={{
            padding: 0,
          }}
        >
          <Link to={`/posts/${post.postId}`}>
            <Stack direction={"column"} position={"relative"}>
              <Box>
                <img
                  src={post.event?.bannerUrl}
                  alt={"Event Banner"}
                  style={{
                    width: "100%",
                    aspectRatio: "4/2",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
              <Box
                position={"absolute"}
                left={theme.spacing(1)}
                top={theme.spacing(1)}
                zIndex={2}
              >
                <Stack>
                  <IconConfetti color="white" />
                </Stack>
              </Box>
              <Box paddingInline={1}>
                <Typography
                  display={"-webkit-box"}
                  overflow={"hidden"}
                  component={"div"}
                  sx={{
                    WebkitLineClamp: 10,
                    WebkitBoxOrient: "vertical",
                    whiteSpace: "normal",
                  }}
                >
                  <ThemedMarkdown>{post.text}</ThemedMarkdown>
                </Typography>
              </Box>
            </Stack>
          </Link>
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
    </>
  );
};

export default EventPost;
