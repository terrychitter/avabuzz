import { Box, Typography } from "@mui/material";
import React from "react";
import CustomCarousel from "../../CustomComponents/CustomCarousel";
import Link from "../../CustomComponents/CustomLink";
import ThemedMarkdown from "../ThemedMarkdown";

interface ImagePostProperties {
  postText: string;
  images: string[];
  link: string;
}

const ImagePost: React.FC<ImagePostProperties> = ({
  postText,
  images,
  link,
}) => {
  return (
    <>
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
        <Link to={link}>
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
    </>
  );
};

export default ImagePost;
