import EventList from "../../HOC/EventList";
import ItemList from "../../HOC/ItemList";

const EventFeed = () => {
  return (
    <ItemList noItemsMessage="No events to show" pullToRefresh>
      {EventList()}
    </ItemList>
  );
};

export default EventFeed;
