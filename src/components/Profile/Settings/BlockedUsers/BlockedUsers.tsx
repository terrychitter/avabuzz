import NakedContentContainer from "../../../CustomComponents/NakedContentContainer";
import ItemList from "../../../HOC/ItemList";
import MainContentContainer from "../../../HOC/MainContentContainer";

const BlockedUsers = () => {
  return (
    <MainContentContainer>
      <NakedContentContainer title="Blocked Users">
        <ItemList sx={{ paddingInline: 2, gap: 2 }} pullToRefresh items={null}>
          {/* Call UserList as a function and spread the resulting array */}
          {/* {...UserList(() => <Button>Unblock</Button>)} */}
        </ItemList>
      </NakedContentContainer>
    </MainContentContainer>
  );
};

export default BlockedUsers;
