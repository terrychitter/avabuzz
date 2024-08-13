import FormControl from "@mui/material/FormControl";
import Lock from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconLock } from "@tabler/icons-react";
import { useTheme } from "@mui/material";

interface ConfirmPasswordInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch: any;
}

const ConfirmPasswordInput: React.FC<ConfirmPasswordInputProps> = ({
  register,
  errors,
  watch,
}) => {
  const password = watch("password");
  const theme = useTheme();

  return (
    <FormControl
      fullWidth
      variant="outlined"
      margin="normal"
      error={!!errors.confirmPassword}
    >
      <InputLabel htmlFor="outlined-adornment-confirm-password">
        Confirm Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-confirm-password"
        type="password"
        {...register("confirmPassword", {
          required: "Confirmed Password is required",
          validate: {
            matches: (value) => value === password || "Passwords do not match",
          },
        })}
        startAdornment={
          <InputAdornment position="start">
            <IconLock
              color={
                errors.confirmPassword
                  ? theme.palette.error.main
                  : theme.palette.text.secondary
              }
            />
          </InputAdornment>
        }
        label="Confirm Password"
      />
      {/* Display helper text */}
      {errors.confirmPassword && (
        <FormHelperText>
          {errors.confirmPassword?.message?.toString()}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default ConfirmPasswordInput;
