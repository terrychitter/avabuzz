import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import PostSearchBox from "./PostSearchBox";
import HomeFeed from "./HomeFeed";

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
            Item One
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
