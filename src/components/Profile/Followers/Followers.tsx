import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import ItemList from "../../HOC/ItemList";
import MainContentContainer from "../../HOC/MainContentContainer";
import AnimatedPage from "../../HOC/AnimatedPage";
import UserList from "../../HOC/UserList";
import { Button } from "@mui/material";

const Followers = () => {
  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer title="Followers">
          <ItemList
            noItemsMessage="No followers to show"
            sx={{ gap: 2, paddingInline: 1 }}
          >
            {/* Call UserList as a function and spread the resulting array */}
            {...UserList(() => <Button>Follow</Button>)}
          </ItemList>
        </NakedContentContainer>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default Followers;
