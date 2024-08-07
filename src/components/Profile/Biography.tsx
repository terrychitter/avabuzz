import { Edit } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Button from "../CustomComponents/AnimatedButton";
import BiographyText from "./BiographyText";
import GenConSexGroup from "./GenConSexGroup";

const Biography = () => {
  return (
    <Stack gap={1}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <GenConSexGroup />
        <Button variant="outlined" size="small" endIcon={<Edit />}>
          Edit
        </Button>
      </Stack>
      <BiographyText />
    </Stack>
  );
};

export default Biography;
