import { Box, Stack, useTheme } from "@mui/material";
import { IconEye, IconMessage } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../utils/formatters";
import { usePost } from "../../../context/PostContext";
import PostLikeSection from "./PostLikeSection";

const PostActions = () => {
  const { post } = usePost();
  const theme = useTheme();

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        gap={0.5}
      >
        <IconEye color={theme.palette.action.disabled} />
        <Box color={theme.palette.action.disabled}>
          {formatNumber(post.view_count)}
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
            <Link to={`/posts/${post.id}#comments`}>
              <IconMessage color={theme.palette.text.primary} />
            </Link>
          </Box>
          <Box component={"span"} fontSize={theme.typography.body1.fontSize}>
            {formatNumber(1)}
          </Box>
        </Stack>
        <PostLikeSection />
      </Stack>
    </>
  );
};

export default PostActions;
