import { Box, Typography } from "@mui/material";
import React from "react";
import CustomCarousel from "../../CustomComponents/CustomCarousel";
import Link from "../../CustomComponents/CustomLink";
import ZoomableImage from "../../ZoomableImage";
import ThemedMarkdown from "../ThemedMarkdown";
import ImageError from "./ImageError";

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
  const [imgError, setImgError] = React.useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <>
      {images.length > 1 ? (
        <Box marginBlockEnd={3}>
          <CustomCarousel arrows swipeable={false}>
            {imgError ? (
              <ImageError key="error" />
            ) : (
              images.map((image, index) => (
                <Box key={index} sx={{ aspectRatio: 1 }}>
                  <ZoomableImage>
                    <img
                      src={image}
                      alt="Random"
                      width="100%"
                      style={{ aspectRatio: 1, objectFit: "contain" }}
                      onError={handleImageError}
                    />
                  </ZoomableImage>
                </Box>
              ))
            )}
          </CustomCarousel>
        </Box>
      ) : (
        <Box width={"100%"} sx={{ aspectRatio: 1 }}>
          {imgError ? (
            <ImageError key="error" />
          ) : (
            <ZoomableImage>
              <img
                src={images[0]}
                alt="Random"
                width="100%"
                onError={handleImageError}
              />
            </ZoomableImage>
          )}
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
