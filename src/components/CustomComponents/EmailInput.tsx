import { useTheme } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { IconMail } from "@tabler/icons-react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface EmailInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const EmailInput: React.FC<EmailInputProps> = ({ register, errors }) => {
  const theme = useTheme();
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
            <IconMail
              color={
                errors.email
                  ? theme.palette.error.main
                  : theme.palette.text.secondary
              }
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default EmailInput;
