import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadable } from "../../utils/loadable";
import Page from "../HOC/AnimatedPage";
import MainContentContainer from "../HOC/MainContentContainer";
import FollowingFeedSkeleton from "./Following/FollowingFeedSkeleton";
import HomeFeed from "./HomeFeed";
import PostSearchBox from "./PostSearchBox";
import TabNavigation from "../CustomComponents/TabNavigation";

// Dynamically import FollowingFeed
const FollowingFeed = loadable(() => import("./Following/FollowingFeed"), {
  fallback: <FollowingFeedSkeleton />,
});

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [initialValue, setInitialValue] = React.useState(1);

  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the '#' from the hash
    const tabIndex = ["following", "home", "events"].indexOf(hash);
    if (tabIndex !== -1) {
      setInitialValue(tabIndex);
    }
  }, [location.hash]);

  const updateUrl = (index: number) => {
    const paths = ["following", "home", "events"];
    navigate(`/home#${paths[index]}`);
  };

  // Define the tabs with custom labels and components
  const tabs = [
    { label: "Following", component: <FollowingFeed /> },
    { label: "Home", component: <HomeFeed /> },
    { label: "Events", component: <div>Events Content</div> },
  ];

  return (
    <Page>
      <MainContentContainer>
        <Box paddingInline={{ xs: 1, md: 2 }} paddingBlockStart={2}>
          <Stack width={"100%"} padding={0}>
            <Box
              marginBlockStart={theme.spacing(-2)}
              marginBlockEnd={theme.spacing(2)}
              paddingBlockEnd={theme.spacing(1)}
              position={"sticky"}
              top={theme.spacing(0)}
              zIndex={900}
              sx={{
                backgroundColor: {
                  xs: theme.palette.background.default,
                  sm: theme.palette.background.paper,
                },
              }}
            >
              <Box paddingBlockStart={theme.spacing(-2)}>
                {/* Use TabNavigation component with custom tabs and sticky content */}
                <TabNavigation
                  tabs={tabs}
                  initialValue={initialValue}
                  updateUrl={updateUrl}
                  stickyContent={<PostSearchBox />} // Add sticky content here
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      </MainContentContainer>
    </Page>
  );
};

export default Home;
