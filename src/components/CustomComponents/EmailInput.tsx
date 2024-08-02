import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface EmailInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const EmailInput: React.FC<EmailInputProps> = ({ register, errors }) => {
  return (
    <TextField
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email address",
        },
      })}
      fullWidth
      label="Email"
      variant="outlined"
      type="email"
      // Render error
      error={Boolean(errors.email)}
      // Render helper text
      helperText={errors.email?.message?.toString()}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {/* Change color if error */}
            <Email sx={{ color: errors.email ? "error.main" : "" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default EmailInput;
