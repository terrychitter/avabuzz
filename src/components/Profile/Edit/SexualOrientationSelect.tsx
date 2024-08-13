import {
  Box,
  FormControl,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import orientations from "../../../../public/sexualities/so.json";
import SexualityIcon from "../SexualityIcon";

// Gender menu item
const OrientationMenuItems = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  return (
    <>
      {orientations.map((orientation: any) => (
        <MenuItem
          key={orientation.value}
          value={orientation.value}
          onClick={() => onSelect(orientation.value)}
        >
          <Stack
            direction={"row"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ListItemIcon>
              <SexualityIcon>{orientation.value}</SexualityIcon>
            </ListItemIcon>
            <Box marginBlockStart={0.6}>
              <Typography>{orientation.name}</Typography>
            </Box>
          </Stack>
        </MenuItem>
      ))}
    </>
  );
};

const SexualOrientationSelect = () => {
  const [selectedOrientation, SetSelectedOrientation] = useState<string>("");

  useEffect(() => {
    if (orientations.length > 0) {
      SetSelectedOrientation(orientations[0].value); // Set the first gender as default
    }
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    SetSelectedOrientation(event.target.value);
  };

  const renderValue = (value: string) => {
    const selectedOrientationObj = orientations.find((g) => g.value === value);
    return selectedOrientationObj ? (
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <SexualityIcon>{selectedOrientationObj.value}</SexualityIcon>
        <Typography sx={{ marginBlockStart: 0.6 }}>
          {selectedOrientationObj.name}
        </Typography>
      </Stack>
    ) : (
      "Select Gender"
    );
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="gender-select-label">Sexual Orientation</InputLabel>
      <Select
        labelId="orientation-select-label"
        id="orientation-select"
        value={selectedOrientation}
        onChange={handleChange}
        label="Sexual Orientation"
        variant="outlined"
        renderValue={renderValue}
      >
        <OrientationMenuItems onSelect={SetSelectedOrientation} />
      </Select>
    </FormControl>
  );
};

export default SexualOrientationSelect;
