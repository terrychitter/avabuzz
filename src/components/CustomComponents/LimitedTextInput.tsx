import { Box, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconBook } from "@tabler/icons-react";
import React from "react";

interface LimitedTextInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: string;
  label: string;
  maxLength: number;
  minLength: number;
  startIcon?: React.ReactNode;
}

const LimitedTextInput: React.FC<LimitedTextInputProps & TextFieldProps> = ({
  register,
  errors,
  name,
  label,
  maxLength,
  minLength,
  startIcon = <IconBook />,
  ...textFieldProps
}) => {
  const [textLength, setTextLength] = useState<number>(0);
  const theme = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.length <= maxLength) {
      setTextLength(input.length);
    } else {
      e.target.value = input.slice(0, maxLength);
      setTextLength(maxLength);
    }
  };

  return (
    <Box position={"relative"}>
      <TextField
        {...register(name, {
          maxLength: { value: maxLength, message: `${label} is too long` },
          minLength: { value: minLength, message: `${label} is too short` },
          onChange: handleInputChange, // This will help to limit text input length
          validate: (value) =>
            value.length >= minLength || `${label} is too short`, // Custom validation for minLength
        })}
        error={Boolean(errors[name])}
        helperText={errors[name]?.message?.toString()}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {startIcon &&
                React.cloneElement(startIcon as React.ReactElement, {
                  color: errors[name]
                    ? theme.palette.error.main
                    : theme.palette.text.secondary,
                })}
            </InputAdornment>
          ),
          ...textFieldProps.InputProps,
        }}
        fullWidth
        label={label}
        variant="outlined"
        type="text"
        sx={{
          marginBlockEnd: theme.spacing(2),
          "& .MuiInputBase-input": {
            paddingInlineEnd: theme.spacing(7),
          },
          ...textFieldProps.sx,
        }}
        {...textFieldProps}
      />
      <Box
        position={"absolute"}
        right={theme.spacing(1)}
        bottom={"calc(50% - 0.2rem)"}
      >
        {textLength}/{maxLength}
      </Box>
    </Box>
  );
};

export default LimitedTextInput;
