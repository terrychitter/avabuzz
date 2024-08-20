import { Box } from "@mui/material";
import NakedContentContainer from "../CustomComponents/NakedContentContainer";
import MainContentContainer from "../HOC/MainContentContainer";
import PostSearchBox from "./PostSearchBox";
import AnimatedPage from "../HOC/AnimatedPage";

const Search = () => {
  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer
          title={
            <Box marginInlineStart={1}>
              <PostSearchBox />
            </Box>
          }
        ></NakedContentContainer>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default Search;
