import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useLocation } from "react-router-dom";

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

interface TabNavigationProps {
  tabs: { label: string; component: React.ReactNode }[];
  updateUrl: (index: number) => void;
  stickyContent?: React.ReactNode;
  initialValue?: number;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  updateUrl,
  stickyContent,
  initialValue = 0,
}) => {
  const location = useLocation();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const hash = location.hash.substring(1);
    const tabIndex = tabs.findIndex(
      (tab) => tab.label.toLowerCase() === hash.toLowerCase()
    );
    if (tabIndex !== -1) {
      setValue(tabIndex);
    } else {
      setValue(initialValue);
    }
  }, [location.hash, tabs, initialValue]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    updateUrl(newValue);
  };

  const handleSwipeChange = (index: number) => {
    setValue(index);
    updateUrl(index);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Box
        paddingBlockEnd={1}
        position={"sticky"}
        top={0}
        zIndex={100}
        sx={{
          backgroundColor: { xs: "background.default", sm: "background.paper" },
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
        {stickyContent && <Box>{stickyContent}</Box>}
      </Box>
      <SwipeableViews index={value} onChangeIndex={handleSwipeChange}>
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.component}
          </TabPanel>
        ))}
      </SwipeableViews>
    </>
  );
};

export default TabNavigation;
