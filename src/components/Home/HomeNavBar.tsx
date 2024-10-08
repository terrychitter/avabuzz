import { Box, Skeleton, Stack, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import PostSearchBox from "./PostSearchBox";
import HomeFeed from "./HomeFeed";
import { loadable } from "../../utils/loadable";

const FollowingFeedSkeleton = () => {
  return (
    <Stack direction={"column"} gap={3}>
      <Stack gap={2}>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Skeleton variant="rounded" animation="wave" width={50} height={50} />
          <Stack direction={"column"}>
            <Skeleton variant="text" animation="wave" width={200} />
            <Skeleton variant="text" animation="wave" width={140} />
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Skeleton variant="rounded" animation="wave" width={50} height={50} />
          <Stack direction={"column"}>
            <Skeleton variant="text" animation="wave" width={200} />
            <Skeleton variant="text" animation="wave" width={140} />
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Skeleton variant="rounded" animation="wave" width={50} height={50} />
          <Stack direction={"column"}>
            <Skeleton variant="text" animation="wave" width={200} />
            <Skeleton variant="text" animation="wave" width={140} />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={"column"} gap={1}>
        <Stack direction={"row"} width={"100%"} gap={1}>
          <Skeleton
            animation={"wave"}
            variant="circular"
            width={"50px"}
            height={"50px"}
          />
          <Stack direction={"column"}>
            <Skeleton
              variant="text"
              width={"150px"}
              sx={{ fontSize: "1rem" }}
            />
            <Skeleton
              variant="text"
              width={"100px"}
              sx={{ fontSize: "1rem" }}
            />
          </Stack>
        </Stack>
        <Skeleton animation={"wave"} variant="rounded" height={"200px"} />
      </Stack>
      <Stack direction={"column"} gap={1}>
        <Stack direction={"row"} width={"100%"} gap={1}>
          <Skeleton
            animation={"wave"}
            variant="circular"
            width={"50px"}
            height={"50px"}
          />
          <Stack direction={"column"}>
            <Skeleton
              variant="text"
              width={"150px"}
              sx={{ fontSize: "1rem" }}
            />
            <Skeleton
              variant="text"
              width={"100px"}
              sx={{ fontSize: "1rem" }}
            />
          </Stack>
        </Stack>
        <Skeleton animation={"wave"} variant="rounded" height={"200px"} />
      </Stack>
      <Stack direction={"column"} gap={1}>
        <Stack direction={"row"} width={"100%"} gap={1}>
          <Skeleton
            animation={"wave"}
            variant="circular"
            width={"50px"}
            height={"50px"}
          />
          <Stack direction={"column"}>
            <Skeleton
              variant="text"
              width={"150px"}
              sx={{ fontSize: "1rem" }}
            />
            <Skeleton
              variant="text"
              width={"100px"}
              sx={{ fontSize: "1rem" }}
            />
          </Stack>
        </Stack>
        <Skeleton animation={"wave"} variant="rounded" height={"200px"} />
      </Stack>
    </Stack>
  );
};

// Dynamically import FollowingFeed
const FollowingFeed = loadable(() => import("./Following/FollowingFeed"), {
  fallback: <FollowingFeedSkeleton />,
});

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

const HomeNavBar = () => {
  const theme = useTheme();
  const [value, setValue] = useState(1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSwipeChange = (index: number) => {
    setValue(index);
  };

  return (
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
        <Box
          paddingBlockStart={theme.spacing(-2)}
          marginInlineStart={theme.spacing(-2)}
        >
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
  );
};

export default HomeNavBar;
