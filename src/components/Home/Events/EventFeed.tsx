import ItemList from "../../HOC/ItemList";

const EventFeed = () => {
  return (
    <ItemList
      noItemsMessage="No events to show"
      pullToRefresh
      items={null}
    ></ItemList>
  );
};

export default EventFeed;
