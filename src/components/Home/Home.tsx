import usePWAInstallPrompt from "../../usePWAInstallPrompt";
import { Button } from "@mui/material";
import Link from "../CustomComponents/CustomLink";
import Page from "../HOC/Page";

const Home = () => {
  const promptInstall = usePWAInstallPrompt();
  return (
    <>
      <Page>
        <Button variant="contained" onClick={promptInstall} id="install-button">
          Install App
        </Button>
        <Link to="/login">Login</Link>
      </Page>
    </>
  );
};

export default Home;
