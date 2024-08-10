import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { encode } from "blurhash";

interface ImageProps {
  src: string;
  alt?: string;
  sx?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, alt, sx }) => {
  const [hash, setHash] = useState<string>("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      // Create a canvas to extract pixel data from the first frame
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imageData = context.getImageData(0, 0, img.width, img.height);
        const blurhash = encode(
          imageData.data,
          imageData.width,
          imageData.height,
          4,
          4
        );
        setHash(blurhash);
      }

      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && hash && (
        <Blurhash
          hash={hash}
          width={100}
          height={100}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && <img src={src} alt={alt} style={sx} />}
    </>
  );
};

export default Image;
