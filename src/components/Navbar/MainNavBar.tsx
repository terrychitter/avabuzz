import { Box, Stack, useTheme } from "@mui/material";
import {
  IconHome,
  IconHomeFilled,
  IconMessageCircle,
  IconMessageCircleFilled,
  IconPlanet,
  IconSquareRoundedPlusFilled,
  IconUser,
  IconUserFilled,
} from "@tabler/icons-react";
import { useLocation } from "react-router-dom";
import Link from "../CustomComponents/CustomLink";
import { motion } from "framer-motion";

const MainNavBar = () => {
  const theme = useTheme();
  const location = useLocation();

  const iconSize = 30;
  const iconStroke = 1.2;
  const nonActiveColor = theme.palette.text.secondary;

  function isPath(path: string): boolean {
    return location.pathname === path;
  }

  // Animation properties
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
    tap: (i: number) => ({
      rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
      transition: {
        duration: 4,
      },
    }),
  };

  return (
    <Box
      position="fixed"
      bottom={0}
      width="100%"
      zIndex={200}
      padding={theme.spacing(1)}
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <svg
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ position: "absolute" }}
      >
        <defs>
          <linearGradient
            id="gradient"
            gradientTransform="rotate(177, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop stopColor="#cd65f0" offset="50%" />
            <stop stopColor="#f15bb5" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Link to="/">
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            {isPath("/") ? (
              <IconHomeFilled
                size={iconSize}
                stroke={iconStroke}
                fill="url(#gradient)"
              />
            ) : (
              <IconHome
                size={iconSize}
                stroke={iconStroke}
                color={nonActiveColor}
              />
            )}
          </motion.div>
        </Link>
        <Link to="/discover">
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            {isPath("/discover") ? (
              <IconPlanet
                size={iconSize}
                stroke={iconStroke}
                fill="url(#gradient)"
                color="transparent"
              />
            ) : (
              <IconPlanet
                size={iconSize}
                stroke={iconStroke}
                color={nonActiveColor}
              />
            )}
          </motion.div>
        </Link>
        <motion.div
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <IconSquareRoundedPlusFilled
            size={iconSize}
            stroke={iconStroke}
            fill="url(#gradient)"
          />
        </motion.div>
        <Link to="/chat">
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            {isPath("/chat") ? (
              <IconMessageCircleFilled
                size={iconSize}
                stroke={iconStroke}
                fill="url(#gradient)"
              />
            ) : (
              <IconMessageCircle
                size={iconSize}
                stroke={iconStroke}
                color={nonActiveColor}
              />
            )}
          </motion.div>
        </Link>
        <Link to="/profile">
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            {isPath("/profile") ? (
              <IconUserFilled
                size={iconSize}
                stroke={iconStroke}
                fill="url(#gradient)"
              />
            ) : (
              <IconUser
                size={iconSize}
                stroke={iconStroke}
                color={nonActiveColor}
              />
            )}
          </motion.div>
        </Link>
      </Stack>
    </Box>
  );
};

export default MainNavBar;
