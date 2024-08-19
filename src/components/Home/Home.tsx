import { Stack } from "@mui/material";
import Page from "../HOC/AnimatedPage";
import MainContentContainer from "../HOC/MainContentContainer";
import HomeNavBar from "./HomeNavBar";

const Home = () => {
  return (
    <>
      <Page>
        <MainContentContainer>
          <Stack direction={"row"} gap={2} p={2}>
            <HomeNavBar />
          </Stack>
        </MainContentContainer>
      </Page>
    </>
  );
};

export default Home;
