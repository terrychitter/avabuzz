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

interface CustomSelectProps {
  label: string;
  items: { value: string; name: string }[];
  IconComponent: React.ComponentType<{ children: React.ReactNode }>;
  iconType: "country" | "sexuality" | "gender";
  defaultValue?: string;
}

const CustomSelect = ({
  label,
  items,
  IconComponent,
  defaultValue = "",
}: CustomSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  useEffect(() => {
    if (items.length > 0) {
      setSelectedValue(items[0].value); // Set the first item as default
    }
  }, [items]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  const renderValue = (value: string) => {
    const selectedItem = items.find((item) => item.value === value);
    return selectedItem ? (
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <IconComponent>{selectedItem.value}</IconComponent>
        <Typography sx={{ marginBlockStart: 0.6 }}>
          {selectedItem.name}
        </Typography>
      </Stack>
    ) : (
      `Select ${label}`
    );
  };

  return (
    <FormControl fullWidth sx={{ marginBlockEnd: 2 }}>
      <InputLabel id={`${label.toLowerCase()}-select-label`}>
        {label}
      </InputLabel>
      <Select
        labelId={`${label.toLowerCase()}-select-label`}
        id={`${label.toLowerCase()}-select`}
        value={selectedValue}
        onChange={handleChange}
        label={label}
        variant="outlined"
        renderValue={renderValue}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <Stack
              direction={"row"}
              gap={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <ListItemIcon>
                <IconComponent>{item.value}</IconComponent>
              </ListItemIcon>
              <Box marginBlockStart={0.6}>
                <Typography>{item.name}</Typography>
              </Box>
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
