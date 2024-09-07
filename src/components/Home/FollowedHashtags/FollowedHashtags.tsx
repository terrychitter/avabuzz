import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import AnimatedPage from "../../HOC/AnimatedPage";
import ItemList from "../../HOC/ItemList";
import MainContentContainer from "../../HOC/MainContentContainer";

const FollowedHashtags = () => {
  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer title="Followed Hashtags">
          <ItemList items={null}></ItemList>
        </NakedContentContainer>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default FollowedHashtags;
