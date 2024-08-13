import { Edit } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Button from "../CustomComponents/AnimatedButton";
import BiographyText from "./BiographyText";
import GenConSexGroup from "./GenConSexGroup";
import Link from "../CustomComponents/CustomLink";

const Biography = () => {
  return (
    <Stack gap={1}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <GenConSexGroup />
        <Link to="edit">
          <Button variant="outlined" endIcon={<Edit />}>
            Edit
          </Button>
        </Link>
      </Stack>
      <BiographyText />
    </Stack>
  );
};

export default Biography;
