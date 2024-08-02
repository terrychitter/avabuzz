import {
  FieldErrors,
  FieldValues,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import PasswordInput from "./PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import { Box } from "@mui/material";

interface ConfirmPasswordInputGroupProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const ConfirmPasswordInputGroup: React.FC<ConfirmPasswordInputGroupProps> = ({
  register,
  errors,
}) => {
  const { watch } = useFormContext<FieldValues>();

  return (
    <Box marginBlock={3}>
      <PasswordInput register={register} errors={errors} newPassword />
      <ConfirmPasswordInput register={register} errors={errors} watch={watch} />
    </Box>
  );
};

export default ConfirmPasswordInputGroup;
