import { Box, Typography } from "@mui/material";
import CustomCarousel from "../../CustomComponents/CustomCarousel";
import Link from "../../CustomComponents/CustomLink";
import ThemedMarkdown from "../ThemedMarkdown";
import Post from "./Post";

const postText = `Look at my awesome post ☝️`;

const images = [
  "https://picsum.photos/1000",
  "https://picsum.photos/1001",
  "https://picsum.photos/1002",
  "https://picsum.photos/1003",
  "https://picsum.photos/1004",
  "https://picsum.photos/1005",
];

const ImagePost = () => {
  return (
    <Post>
      {images.length > 1 ? (
        <Box marginBlockEnd={3}>
          <CustomCarousel arrows swipeable={false}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Random"
                width="100%"
                style={{ aspectRatio: 1, objectFit: "contain" }}
              />
            ))}
          </CustomCarousel>
        </Box>
      ) : (
        <Box width={{ xs: "100%", md: "50%" }} margin={{ md: "auto" }}>
          <img src={images[0]} alt="Random" width="100%" />
        </Box>
      )}
      <Box paddingInline={1} marginBlockStart={1}>
        <Link to="/posts/:post_id">
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
        </Link>
      </Box>
    </Post>
  );
};

export default ImagePost;
