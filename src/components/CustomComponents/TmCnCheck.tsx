import React from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import { FieldErrors, FieldValues, Control, Controller } from "react-hook-form";

// Interface for TmCnCheck
interface TmCnCheckProps {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const TmCnCheck: React.FC<TmCnCheckProps> = ({ control, errors }) => {
  return (
    <FormControl error={!!errors.termsAndConditions} component="fieldset">
      <Controller
        name="termsAndConditions"
        control={control}
        defaultValue={false}
        rules={{ required: "You must agree to the Terms and Conditions" }}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="I agree to the Terms and Conditions"
          />
        )}
      />
      {/* Display helper text */}
      {errors.termsAndConditions && (
        <FormHelperText>
          {errors.termsAndConditions?.message?.toString()}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TmCnCheck;
