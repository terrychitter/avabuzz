import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { IconHeart, IconMessage2, IconPhoto } from "@tabler/icons-react";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import CommentList from "../HOC/CommentList";
import ItemList from "../HOC/ItemList";
import Panel from "../HOC/Panel";
import PostList from "../HOC/PostList";

const UserContent = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box height="100%" display="flex" flexDirection="column" id="posts">
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
        <Tab label={<IconPhoto />} />
        <Tab label={<IconMessage2 />} />
        <Tab label={<IconHeart />} />
      </Tabs>
      <SwipeableViews
        index={value}
        onChangeIndex={setValue}
        style={{ height: "100% !important" }}
      >
        {/* Posts Panel */}
        <Panel value={value} index={0} sx={{ height: "100%" }}>
          <ItemList columns={{ xs: 1 }} noItemsMessage="No posts to show">
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
