import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import React from "react";
import Panel from "../HOC/Panel";
import ItemList from "../HOC/ItemList";
import PostList from "../HOC/PostList";
import CommentList from "../HOC/CommentList";
import SwipeableViews from "react-swipeable-views";

const UserContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box maxHeight={"700px"} width={"100%"}>
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons={false}
        aria-label="user content tabs"
        variant="fullWidth"
        centered
      >
        <Tab label="Posts" />
        <Tab label="Comments" />
        <Tab label="Favorites" />
      </Tabs>
      <SwipeableViews index={value} onChangeIndex={setValue}>
        {/* Posts Panel */}
        <Panel value={value} index={0}>
          <Box maxHeight={"500px"} overflow="auto">
            <ItemList
              columns={{ xs: 1, sm: 2 }}
              noItemsMessage="No posts to show"
            >
              {PostList()}
            </ItemList>
          </Box>
        </Panel>
        {/* Comments Panel */}
        <Panel value={value} index={1}>
          <Box maxHeight={"500px"} overflow="auto">
            <ItemList columns={{ xs: 1 }} noItemsMessage="No comments to show">
              {CommentList()}
            </ItemList>
          </Box>
        </Panel>
        {/* Favourites Panel */}
        <Panel value={value} index={2}>
          <Box maxHeight={"500px"} overflow="auto">
            <ItemList
              columns={{ xs: 1, sm: 2, lg: 3 }}
              noItemsMessage="No favorites to show"
            >
              {PostList()}
            </ItemList>
          </Box>
        </Panel>
      </SwipeableViews>
    </Box>
  );
};

export default UserContent;
