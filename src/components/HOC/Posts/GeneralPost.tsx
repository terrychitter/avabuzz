import { Box, Typography } from "@mui/material";
import Link from "../../CustomComponents/CustomLink";
import ThemedMarkdown from "../ThemedMarkdown";
import Post from "./Post";

const postText = `**Grass** 🌱 tastes bad 🤮`;

const GeneralPost = () => {
  return (
    <Post>
      <Link to="/posts/:post_id">
        <Box paddingInline={2}>
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
            <ThemedMarkdown>{postText}</ThemedMarkdown>
          </Typography>
        </Box>
      </Link>
    </Post>
  );
};

export default GeneralPost;
