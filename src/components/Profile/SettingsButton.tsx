import Link from "../CustomComponents/CustomLink";
import { IconButton } from "@mui/material";
import { IconSettingsFilled } from "@tabler/icons-react";

const SettingsButton = () => {
  return (
    <Link to={"/settings"}>
      <IconButton>
        <IconSettingsFilled size={"1.7rem"} color="white" />
      </IconButton>
    </Link>
  );
};

export default SettingsButton;
