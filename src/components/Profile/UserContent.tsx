import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { IconHeart, IconMessage2, IconPhoto } from "@tabler/icons-react";
import React from "react";
import { useQuery } from "react-query";
import SwipeableViews from "react-swipeable-views";
import { fetchUserPosts } from "../../api/posts/postApi";
import { useUser } from "../../Context/UserContext";
import ItemList from "../HOC/ItemList";
import Panel from "../HOC/Panel";
import PostList from "../HOC/PostList";
import { PostType } from "../../Context/PostContext";

const UserContent = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Get the private user id from the context
  const { public_user_id } = useUser().user;
  // Fetch the user's posts
  const { data: posts = [] } = useQuery({
    queryKey: ["userPosts", public_user_id],
    queryFn: () => fetchUserPosts(public_user_id),
    enabled: !!public_user_id,
  });

  if (posts) {
    // Add the user context to post.user
    posts.forEach((post: PostType) => {
      post.poster = { ...useUser().user };
    });
    console.log("posts", posts);
  }

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
        <Panel value={value} index={0} sx={{ height: "100%" }}>
          <ItemList
            columns={{ xs: 1 }}
            noItemsMessage="No posts to show"
            items={posts.length > 0 ? <PostList posts={posts} /> : null}
          />
        </Panel>

        {/* Comments Panel */}
        <Panel value={value} index={1} sx={{ height: "100%" }}>
          <ItemList
            columns={{ xs: 1 }}
            items={[]}
            noItemsMessage="No comments to show"
          ></ItemList>
        </Panel>

        {/* Favourites Panel */}
        <Panel value={value} index={2} sx={{ height: "100%" }}>
          <ItemList
            columns={{ xs: 1, sm: 2, lg: 3 }}
            items={posts.length > 0 ? <PostList posts={posts} /> : null}
            noItemsMessage="No favorites to show"
          />
        </Panel>
      </SwipeableViews>
    </Box>
  );
};

export default UserContent;
