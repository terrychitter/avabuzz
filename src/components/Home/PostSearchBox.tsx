import { InputAdornment, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const PostSearchBox = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <TextField
      size="small"
      placeholder="Search posts"
      type="search"
      fullWidth
      onClick={() => navigate("/search")}
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
