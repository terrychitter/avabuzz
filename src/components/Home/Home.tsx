import usePWAInstallPrompt from "../../usePWAInstallPrompt";
import { Button, Stack } from "@mui/material";
import Link from "../CustomComponents/CustomLink";
import Page from "../HOC/Page";

const Home = () => {
  const promptInstall = usePWAInstallPrompt();
  return (
    <>
      <Page>
        <Stack direction={"row"} gap={2} p={2}>
          <Button
            variant="contained"
            onClick={promptInstall}
            id="install-button"
          >
            Install App
          </Button>
          <Link to="/login">Login</Link>
          <Link to="/my-profile">Profile</Link>
        </Stack>
      </Page>
    </>
  );
};

export default Home;
