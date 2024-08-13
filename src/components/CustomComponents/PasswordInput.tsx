import { useTheme } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { IconEye, IconEyeOff, IconLock } from "@tabler/icons-react";
import React, { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Link from "./CustomLink";

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
              <IconLock
                color={
                  errors.password
                    ? theme.palette.error.main
                    : theme.palette.text.secondary
                }
              />
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
                {showPassword ? (
                  <IconEye color={theme.palette.text.secondary} />
                ) : (
                  <IconEyeOff color={theme.palette.text.secondary} />
                )}
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
