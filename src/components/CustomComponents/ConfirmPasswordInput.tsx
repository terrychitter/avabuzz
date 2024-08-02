import FormControl from "@mui/material/FormControl";
import Lock from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useWatch,
} from "react-hook-form";

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
  const password = watch("password"); // Watch the password field value

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
            <Lock sx={{ color: errors.confirmPassword ? "error.main" : "" }} />
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
