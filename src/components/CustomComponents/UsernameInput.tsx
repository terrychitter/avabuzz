import { useTheme } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { IconUser } from "@tabler/icons-react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

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
            <IconUser
              color={
                errors.username
                  ? theme.palette.error.main
                  : theme.palette.text.secondary
              }
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
