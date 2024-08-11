import Link from "../CustomComponents/CustomLink";
import IconButton from "@mui/material/IconButton";
import Settings from "@mui/icons-material/Settings";

const SettingsButton = () => {
  return (
    <Link to={"settings"}>
      <IconButton>
        <Settings sx={{ fontSize: "1.7rem" }} />
      </IconButton>
    </Link>
  );
};

export default SettingsButton;
