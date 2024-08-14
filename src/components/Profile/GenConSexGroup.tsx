import { Stack } from "@mui/material";
import CountryIcon from "./CountryIcon";
import SexualityIcon from "./SexualityIcon";
import { useTheme } from "@mui/material/styles";
import GenderIcon from "./GenderIcon";

const GenConSexGroup = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={theme.spacing(0.5)}>
      <CountryIcon>south-africa</CountryIcon>
      <SexualityIcon>gay</SexualityIcon>
      <GenderIcon>male</GenderIcon>
    </Stack>
  );
};

export default GenConSexGroup;
