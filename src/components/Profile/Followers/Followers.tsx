import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import ItemList from "../../HOC/ItemList";
import MainContentContainer from "../../HOC/MainContentContainer";
import UserList from "../../HOC/UserList";

const Followers = () => {
  return (
    <MainContentContainer>
      <NakedContentContainer title="Followers">
        <ItemList
          noItemsMessage="No followers to show"
          sx={{ gap: 2, paddingInline: 1 }}
        >
          {UserList()}
        </ItemList>
      </NakedContentContainer>
    </MainContentContainer>
  );
};

export default Followers;
