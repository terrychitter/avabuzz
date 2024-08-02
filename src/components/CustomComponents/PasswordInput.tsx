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
import Link from "./CustomLink";
import { useTheme } from "@mui/material";

interface PasswordInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  newPassword: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  register,
  errors,
  newPassword = false,
}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
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
            ...(newPassword
              ? {
                  validate: {
                    minLength: (value) =>
                      value.length >= 8 ||
                      "Password must be at least 8 characters",
                    number: (value) =>
                      /[0-9]/.test(value) ||
                      "Password must contain at least one number",
                    letter: (value) =>
                      /[a-zA-Z]/.test(value) ||
                      "Password must contain at least one letter",
                    uppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must contain at least one uppercase letter",
                    symbol: (value) =>
                      /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                      "Password must contain at least one special character",
                  },
                }
              : {}),
          })}
          startAdornment={
            <InputAdornment position="start">
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
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        {/* Display helper text */}
        {errors.password && (
          <FormHelperText>
            {errors.password?.message?.toString()}
          </FormHelperText>
        )}
        {!newPassword && (
          <Link
            to="/forgot-password"
            style={{ marginTop: theme.spacing(1), textAlign: "right" }}
          >
            Forgot Password?
          </Link>
        )}
      </FormControl>
    </>
  );
};

export default PasswordInput;
