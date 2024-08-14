import { useTheme } from "@mui/material";
import { IconPointFilled } from "@tabler/icons-react";
import React from "react";
import Carousel from "react-material-ui-carousel";

interface CustomCarouselProps extends React.ComponentProps<typeof Carousel> {
  children: React.ReactNode;
  height?: string | number;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  children,
  height,
  autoPlay = false, // Set default value
  animation = "slide", // Set default value
  navButtonsAlwaysInvisible = true, // Set default value
  indicators = true, // Set default value
  IndicatorIcon = <IconPointFilled size={"0.9rem"} />, // Set default value
  indicatorContainerProps = {
    style: {
      marginTop: useTheme().spacing(0), // Set default value with theme
    },
  },
  ...props // Spread remaining props here
}) => {
  return (
    <Carousel
      autoPlay={autoPlay}
      animation={animation}
      navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
      indicators={indicators}
      height={height}
      IndicatorIcon={IndicatorIcon}
      indicatorContainerProps={indicatorContainerProps}
      {...props} // Pass down the remaining props to Carousel
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
