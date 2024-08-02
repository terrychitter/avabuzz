import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Lock from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      margin="normal"
      error={!!errors.password}
    >
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        {...register("password", {
          required: "Password is required",
        })}
        startAdornment={
          <InputAdornment position="start">
            {/* Change color if error */}
            <Lock sx={{ color: errors.password ? "error.main" : "" }} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handlePasswordChange}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      {/* Display helper text */}
      {errors.password && (
        <FormHelperText>{errors.password?.message?.toString()}</FormHelperText>
      )}
    </FormControl>
  );
};

export default PasswordInput;
