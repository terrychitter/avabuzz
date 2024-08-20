import { Box } from "@mui/material";
import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import AnimatedPage from "../../HOC/AnimatedPage";
import HashtagList from "../../HOC/HashtagList";
import ItemList from "../../HOC/ItemList";
import MainContentContainer from "../../HOC/MainContentContainer";

const FollowedHashtags = () => {
  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer title="Followed Hashtags">
          <ItemList>
            <Box paddingInline={1}>{HashtagList()}</Box>
          </ItemList>
        </NakedContentContainer>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default FollowedHashtags;
