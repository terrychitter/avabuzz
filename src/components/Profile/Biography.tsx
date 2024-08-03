import { Divider, Stack } from "@mui/material";
import Button from "../CustomComponents/AnimatedButton";
import GenConSexGroup from "./GenConSexGroup";
import { Edit } from "@mui/icons-material";
import BiographyText from "./BiographyText";

const Biography = () => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <GenConSexGroup />
        <Button variant="outlined" endIcon={<Edit />}>
          Edit
        </Button>
      </Stack>
      <Divider sx={{ marginBlock: 1 }} />
      <BiographyText />
    </>
  );
};

export default Biography;
