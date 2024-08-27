import ItemList from "../HOC/ItemList";
import PostList from "../HOC/PostList";

const HomeFeed = () => {
  return (
    <ItemList noItemsMessage="No posts to show" pullToRefresh>
      {PostList()}
    </ItemList>
  );
};

export default HomeFeed;
