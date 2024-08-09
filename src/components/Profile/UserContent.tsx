import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import React from "react";
import Panel from "../HOC/Panel";
import ItemList from "../HOC/ItemList";
import PostList from "../HOC/PostList";
import CommentList from "../HOC/CommentList";
import SwipeableViews from "react-swipeable-views";
import theme from "../../theme/abz_dark_theme";

const UserContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons={false}
        aria-label="user content tabs"
        variant="fullWidth"
        centered
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: {
            xs: theme.palette.background.default,
            sm: theme.palette.background.paper,
          },
        }}
      >
        <Tab label="Posts" />
        <Tab label="Comments" />
        <Tab label="Favorites" />
      </Tabs>
      <SwipeableViews
        index={value}
        onChangeIndex={setValue}
        style={{ height: "100% !important" }}
      >
        {/* Posts Panel */}
        <Panel value={value} index={0} sx={{ height: "100%" }}>
          <ItemList
            columns={{ xs: 1, md: 2 }}
            noItemsMessage="No posts to show"
          >
            {PostList()}
          </ItemList>
        </Panel>

        {/* Comments Panel */}
        <Panel value={value} index={1} sx={{ height: "100%" }}>
          <ItemList columns={{ xs: 1 }} noItemsMessage="No comments to show">
            {CommentList()}
          </ItemList>
        </Panel>

        {/* Favourites Panel */}
        <Panel value={value} index={2} sx={{ height: "100%" }}>
          <ItemList
            columns={{ xs: 1, sm: 2, lg: 3 }}
            noItemsMessage="No favorites to show"
          >
            {PostList()}
          </ItemList>
        </Panel>
      </SwipeableViews>
    </Box>
  );
};

export default UserContent;
