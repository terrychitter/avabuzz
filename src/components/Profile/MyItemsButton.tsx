import Link from "../CustomComponents/CustomLink";
import IconButton from "@mui/material/IconButton";
import { IconDiamondFilled } from "@tabler/icons-react";

const MyItemsButton = () => {
  return (
    <Link to={"/my-items"}>
      <IconButton>
        <IconDiamondFilled size={"1.7rem"} />
      </IconButton>
    </Link>
  );
};

export default MyItemsButton;
