import { InputAdornment, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconSearch } from "@tabler/icons-react";

const PostSearchBox = () => {
  const theme = useTheme();
  return (
    <TextField
      size="small"
      placeholder="Search posts"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconSearch color={theme.palette.text.disabled} size={20} />
          </InputAdornment>
        ),
      }}
      sx={{ color: theme.palette.text.disabled }}
    />
  );
};

export default PostSearchBox;
