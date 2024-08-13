import { ChatBubbleOutline, FavoriteBorder, Groups } from "@mui/icons-material";
import {
  Box,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material";
import { IconMessage, IconHeart, IconEye } from "@tabler/icons-react";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import Link from "../CustomComponents/CustomLink";
import PostActionKit from "./PostActionKit";
import ProfilePictureKit from "./ProfilePictureKit";
import ThemedMarkdown from "./ThemedMarkdown";
import UsernameKit from "./UsernameKit";

const postText = `# Hello World
I am here to share my thoughts with you.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

const Post = () => {
  const theme = useTheme();
  const showSeeMoreButton = postText.length > 100;

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<ProfilePictureKit pictureWidth={{ xs: "3rem" }} />}
        title={<UsernameKit />}
        action={<PostActionKit />}
        subheader="Sep 14, 2016"
      />
      <CardActionArea>
        <CardContent>
          {showSeeMoreButton ? (
            <>
              <ThemedMarkdown>
                {postText.substring(0, 100)}
                {postText.length > 100 ? "..." : ""}
              </ThemedMarkdown>
              <Link to="/posts/post_id">See More...</Link>
            </>
          ) : (
            <ThemedMarkdown>{postText}</ThemedMarkdown>
          )}
        </CardContent>
      </CardActionArea>
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
          gap={1}
        >
          <IconEye color={theme.palette.action.disabled} />
          <Box color={theme.palette.action.disabled}>12</Box>
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
            <IconMessage />
            <Box component={"span"} fontSize={theme.typography.body1.fontSize}>
              2
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
              2
            </Box>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Post;
