import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { loadable } from "../../utils/loadable";
import Page from "../HOC/AnimatedPage";
import MainContentContainer from "../HOC/MainContentContainer";
import FollowingFeedSkeleton from "./Following/FollowingFeedSkeleton";
import HomeFeed from "./HomeFeed";
import PostSearchBox from "./PostSearchBox";

// Dynamically import FollowingFeed
const FollowingFeed = loadable(() => import("./Following/FollowingFeed"), {
  fallback: <FollowingFeedSkeleton />,
});

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation(); // Add this line
  const [value, setValue] = useState(1);

  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the '#' from the hash
    const tabIndex = ["following", "home", "events"].indexOf(hash);
    if (tabIndex !== -1) {
      setValue(tabIndex);
    }
  }, [location.hash]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    updateUrl(newValue);
  };

  const handleSwipeChange = (index: number) => {
    setValue(index);
    updateUrl(index);
  };

  const updateUrl = (index: number) => {
    const paths = ["following", "home", "events"];
    navigate(`/home#${paths[index]}`);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Page>
        <MainContentContainer>
          <Box paddingInline={{ xs: 1, md: 2 }}>
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
                  <Tabs value={value} onChange={handleChange}>
                    <Tab label="Following" {...a11yProps(0)} />
                    <Tab label="Home" {...a11yProps(1)} />
                    <Tab label="Events" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <PostSearchBox />
              </Box>
              <Box>
                <SwipeableViews index={value} onChangeIndex={handleSwipeChange}>
                  <TabPanel value={value} index={0}>
                    <FollowingFeed />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <HomeFeed />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Item Three
                  </TabPanel>
                </SwipeableViews>
              </Box>
            </Stack>
          </Box>
        </MainContentContainer>
      </Page>
    </>
  );
};

export default Home;
