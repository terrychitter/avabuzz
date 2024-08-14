import { Stack } from "@mui/material";
import BiographyText from "./BiographyText";

const Biography = () => {
  return (
    <Stack gap={1}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      ></Stack>
      <BiographyText />
    </Stack>
  );
};

export default Biography;
