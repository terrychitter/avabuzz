import { Stack } from "@mui/material";
import CountryIcon from "./CountryIcon";
import SexualityIcon from "./SexualityIcon";
import { useTheme } from "@mui/material/styles";
import GenderIcon from "./GenderIcon";

const GenConSexGroup = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      gap={theme.spacing(1)}
      sx={{ paddingInlineStart: theme.spacing(1) }}
    >
      <CountryIcon>south-africa</CountryIcon>
      <SexualityIcon>progress</SexualityIcon>
      <GenderIcon>male</GenderIcon>
    </Stack>
  );
};

export default GenConSexGroup;
