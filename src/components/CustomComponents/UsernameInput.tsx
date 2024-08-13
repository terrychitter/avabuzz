import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { useTheme } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

interface UsernameInputProps {
  tooltip?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const UsernameInput: React.FC<UsernameInputProps> = ({
  register,
  errors,
  tooltip = true,
}) => {
  const theme = useTheme();

  const textField = (
    <TextField
      {...register("username", {
        required: "Username is required",
      })}
      // Render error
      error={Boolean(errors.username)}
      // Render helper text
      helperText={errors.username?.message?.toString()}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {/* Change color if error */}
            <AccountCircle
              sx={{ color: errors.username ? "error.main" : "" }}
            />
          </InputAdornment>
        ),
      }}
      fullWidth
      label="Username"
      variant="outlined"
      type="text"
      sx={{ marginBlockEnd: theme.spacing(2) }}
    />
  );

  return tooltip ? (
    <Tooltip
      title="Don't worry, you can change your username later"
      placement="top"
    >
      {textField}
    </Tooltip>
  ) : (
    textField
  );
};

export default UsernameInput;
