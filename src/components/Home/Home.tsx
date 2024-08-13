import { Stack } from "@mui/material";
import Link from "../CustomComponents/CustomLink";
import Page from "../HOC/AnimatedPage";

const Home = () => {
  return (
    <>
      <Page>
        <Stack direction={"row"} gap={2} p={2}>
          <Link to="login">Login</Link>
          <Link to="profile">Profile</Link>
        </Stack>
      </Page>
    </>
  );
};

export default Home;
