import Link from "../CustomComponents/CustomLink";
import IconButton from "@mui/material/IconButton";
import Diamond from "@mui/icons-material/Diamond";

const MyItemsButton = () => {
  return (
    <Link to={"/my-items"}>
      <IconButton>
        <Diamond sx={{ fontSize: "1.7rem" }} />
      </IconButton>
    </Link>
  );
};

export default MyItemsButton;
