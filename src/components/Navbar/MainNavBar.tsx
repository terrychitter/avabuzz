import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import {
  ChatNavItem,
  DiscoverNavItem,
  HomeNavItem,
  NewPostNavItem,
  ProfileNavItem,
} from "./NavLinkItems";

const MainNavBar = () => {
  const theme = useTheme();
  const isSmallScreenOrLarger = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {!isSmallScreenOrLarger && (
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
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <HomeNavItem />
            <DiscoverNavItem />
            <NewPostNavItem />
            <ChatNavItem />
            <ProfileNavItem />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default MainNavBar;
