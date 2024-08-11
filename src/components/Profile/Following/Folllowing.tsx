import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import ItemList from "../../HOC/ItemList";
import MainContentContainer from "../../HOC/MainContentContainer";
import AnimatedPage from "../../HOC/AnimatedPage";
import UserList from "../../HOC/UserList";

const Following = () => {
  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer title="Following">
          <ItemList
            noItemsMessage="No followers to show"
            sx={{ gap: 2, paddingInline: 1 }}
          >
            {UserList()}
          </ItemList>
        </NakedContentContainer>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default Following;
