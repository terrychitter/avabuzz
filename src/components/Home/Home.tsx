import { Stack } from "@mui/material";
import Link from "../CustomComponents/CustomLink";
import Page from "../HOC/AnimatedPage";
import MainContentContainer from "../HOC/MainContentContainer";

const Home = () => {
  return (
    <>
      <Page>
        <MainContentContainer>
          <Stack direction={"row"} gap={2} p={2}>
            <Link to="login">Login</Link>
            <Link to="profile">Profile</Link>
          </Stack>
        </MainContentContainer>
      </Page>
    </>
  );
};

export default Home;
