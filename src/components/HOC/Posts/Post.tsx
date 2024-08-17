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

interface PostProperties {
  children: React.ReactNode;
}

const Post: React.FC<PostProperties> = ({ children }) => {
  const theme = useTheme();
  return (
    <Card variant="outlined" sx={{ minHeight: 150 }}>
      <Link to="/profile">
        <CardHeader
          avatar={<ProfilePictureKit pictureWidth={{ xs: "3rem" }} />}
          title={<UsernameKit />}
          action={<PostActionKit />}
          subheader="Sep 14, 2016"
        />
      </Link>
      <CardActionArea>
        <CardContent sx={{ padding: 0 }}>{children}</CardContent>
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
            <Box marginBlockStart="7px !important">
              <Link to="/posts/:post_id#comments">
                <IconMessage />
              </Link>
            </Box>
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
