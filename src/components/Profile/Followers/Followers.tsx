import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import AnimatedPage from "../../HOC/AnimatedPage";
import ItemList from "../../HOC/ItemList";
import MainContentContainer from "../../HOC/MainContentContainer";

const Followers = () => {
  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer title="Followers">
          <ItemList
            noItemsMessage="No followers to show"
            pullToRefresh
            items={null}
            sx={{ gap: 2, paddingInline: 1 }}
          >
            {/* {...UserList(() => <Button>Follow</Button>)} */}
          </ItemList>
        </NakedContentContainer>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default Followers;
