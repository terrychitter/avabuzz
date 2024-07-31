import usePWAInstallPrompt from "../../usePWAInstallPrompt";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const promptInstall = usePWAInstallPrompt();
  return (
    <>
      <Button variant="contained" onClick={promptInstall} id="install-button">
        Install App
      </Button>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Home;
