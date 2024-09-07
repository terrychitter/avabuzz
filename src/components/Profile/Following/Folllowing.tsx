import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import AnimatedPage from "../../HOC/AnimatedPage";
import ItemList from "../../HOC/ItemList";
import MainContentContainer from "../../HOC/MainContentContainer";

const Following = () => {
  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer title="Following">
          <ItemList
            noItemsMessage="No followers to show"
            pullToRefresh
            items={null}
            sx={{ gap: 2, paddingInline: 1 }}
          >
            {/* Call UserList as a function and spread the resulting array */}
            {/* {...UserList(() => <AnimatedButton>Unfollow</AnimatedButton>)} */}
          </ItemList>
        </NakedContentContainer>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default Following;
