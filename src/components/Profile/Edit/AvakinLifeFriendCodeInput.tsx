import { TextField } from "@mui/material";
import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import AvakinLifeLogo from "/icons/avakin-logo.webp";

interface AvakinLifeFriendCodeInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const AvakinLifeFriendCodeInput: React.FC<AvakinLifeFriendCodeInputProps> = ({
  register,
  errors,
}) => {
  return (
    <TextField
      {...register("avakinLifeFriendCode", {
        pattern: {
          value: /^[A-Z0-9]{3}-[A-Z0-9]{3}$/,
          message: "Please enter a valid friend code in the format XXX-XXX",
        },
      })}
      label="Avakin Life Friend Code (Optional)"
      variant="outlined"
      placeholder="Example: XXX-XXX"
      fullWidth
      error={!!errors.avakinLifeFriendCode}
      helperText={errors.avakinLifeFriendCode?.message as string}
      InputProps={{
        startAdornment: (
          <img
            src={AvakinLifeLogo}
            alt="Avakin Life"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              marginInlineEnd: "0.5rem",
            }}
          />
        ),
      }}
    />
  );
};

export default AvakinLifeFriendCodeInput;
