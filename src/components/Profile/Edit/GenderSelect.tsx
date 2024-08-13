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
import genders from "../../../../public/genders/genders.json";
import GenderIcon from "../GenderIcon";

// Gender menu item
const GenderMenuItems = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  return (
    <>
      {genders.map((gender: any) => (
        <MenuItem
          key={gender.value}
          value={gender.value}
          onClick={() => onSelect(gender.value)}
        >
          <Stack
            direction={"row"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ListItemIcon>
              <GenderIcon>{gender.value}</GenderIcon>
            </ListItemIcon>
            <Box marginBlockStart={0.6}>
              <Typography>{gender.name}</Typography>
            </Box>
          </Stack>
        </MenuItem>
      ))}
    </>
  );
};

const GenderSelect = () => {
  const [selectedGender, setSelectedGender] = useState<string>("");

  useEffect(() => {
    if (genders.length > 0) {
      setSelectedGender(genders[0].value); // Set the first gender as default
    }
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedGender(event.target.value);
  };

  const renderValue = (value: string) => {
    const selectedGenderObj = genders.find((g) => g.value === value);
    return selectedGenderObj ? (
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <GenderIcon>{selectedGenderObj.value}</GenderIcon>
        <Typography sx={{ marginBlockStart: 0.6 }}>
          {selectedGenderObj.name}
        </Typography>
      </Stack>
    ) : (
      "Select Gender"
    );
  };

  return (
    <FormControl fullWidth sx={{ marginBlockEnd: 2 }}>
      <InputLabel id="gender-select-label">Gender</InputLabel>
      <Select
        labelId="gender-select-label"
        id="gender-select"
        value={selectedGender}
        onChange={handleChange}
        label="Gender"
        variant="outlined"
        renderValue={renderValue}
      >
        <GenderMenuItems onSelect={setSelectedGender} />
      </Select>
    </FormControl>
  );
};

export default GenderSelect;
