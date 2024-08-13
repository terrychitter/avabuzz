import { Stack } from "@mui/material";
import { IconPencil } from "@tabler/icons-react";
import AnimatedIconButton from "../CustomComponents/AnimatedIconButton";
import Link from "../CustomComponents/CustomLink";
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
        <Link to="edit">
          <AnimatedIconButton>
            <IconPencil size={"1.5rem"} />
          </AnimatedIconButton>
        </Link>
      </Stack>
      <BiographyText />
    </Stack>
  );
};

export default Biography;
