import ItemList from "../HOC/ItemList";

const HomeFeed = () => {
  return (
    <ItemList
      noItemsMessage="No posts to show"
      pullToRefresh
      items={null}
    ></ItemList>
  );
};

export default HomeFeed;
