import { Box, useTheme } from "@mui/material";
import { IconPointFilled } from "@tabler/icons-react";
import React from "react";
import Carousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Define the props interface for the custom dot component
interface CustomDotProps {
  onClick: () => void;
  active: boolean;
}

interface CustomCarouselProps extends Omit<CarouselProps, "responsive"> {
  children: React.ReactNode;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  // Implement the CustomDot component with the correct type for props
  const CustomDot = ({ onClick, active }: CustomDotProps) => (
    <button
      onClick={onClick}
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "0",
        marginInline: "-8px",
        marginBlockEnd: "-1px",
        opacity: active ? 1 : 0.5,
      }}
    >
      <IconPointFilled
        size={"1rem"}
        color={
          active
            ? theme.palette.getContrastText(theme.palette.background.default)
            : theme.palette.getContrastText(theme.palette.background.default)
        }
      />
    </button>
  );

  return (
    <Box position={"relative"}>
      <style>
        {`
          .custom-dot-list-style {
            display: flex;
            justify-content: center;
            margin-bottom: -18px;
            gap: 10px;
          }

          .custom-dot-list-style > * {
            margin-right: 5px;
          }
        `}
      </style>
      <Carousel
        responsive={responsive}
        swipeable
        showDots
        renderDotsOutside
        arrows={false}
        customDot={<CustomDot onClick={() => {}} active={false} />}
        dotListClass="custom-dot-list-style"
        {...props}
      >
        {children}
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
