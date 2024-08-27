import { Box, Dialog, DialogContent } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

interface ZoomableImageContentProps {
  src: string;
  alt?: string;
  onUpdate: (update: { x: number; y: number; scale: number }) => void;
}

const ZoomableImageContent = React.forwardRef<
  HTMLImageElement,
  ZoomableImageContentProps
>(({ src, alt, onUpdate }, ref) => (
  <QuickPinchZoom
    onUpdate={onUpdate}
    doubleTapToggleZoom
    draggableUnZoomed={false}
  >
    <img
      src={src}
      alt={alt}
      ref={ref}
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
      }}
    />
  </QuickPinchZoom>
));

interface ZoomableImageProps {
  children: React.ReactElement<HTMLImageElement>;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleOpen = () => {
    setOpen(true);
    console.log("Image clicked");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onUpdate = useCallback(
    ({ x, y, scale }: { x: number; y: number; scale: number }) => {
      if (imgRef.current) {
        const value = make3dTransformValue({ x, y, scale });
        imgRef.current.style.transform = value;
      }
    },
    []
  );

  return (
    <>
      <Box onClick={handleOpen} sx={{ cursor: "pointer" }}>
        {React.cloneElement(children)}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: 0,
            padding: 0,
            margin: 0,
            overflow: "visible",
            backgroundColor: "transparent",
            backgroundFilter: "blur(5px)",
            boxShadow: "none",
            backgroundImage: "none",
          },
        }}
      >
        <DialogContent
          sx={{
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ZoomableImageContent
            src={children.props.src}
            alt={children.props.alt}
            onUpdate={onUpdate}
            ref={imgRef}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZoomableImage;
