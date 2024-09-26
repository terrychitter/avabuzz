import { Stack } from "@mui/material";
import CountryIcon from "./CountryIcon";
import SexualityIcon from "./SexualityIcon";
import { useTheme } from "@mui/material/styles";
import GenderIcon from "./GenderIcon";

interface GenConSexGroupProps {
  country?: string | null;
  sexuality?: string | null;
  gender?: string | null;
}

const GenConSexGroup: React.FC<GenConSexGroupProps> = ({
  country,
  sexuality,
  gender,
}) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={theme.spacing(0.5)}>
      {country && <CountryIcon>{country}</CountryIcon>}
      {sexuality && <SexualityIcon>{sexuality}</SexualityIcon>}
      {gender && <GenderIcon>{gender}</GenderIcon>}
    </Stack>
  );
};

export default GenConSexGroup;
