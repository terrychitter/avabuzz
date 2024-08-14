import Tooltip from "@mui/material/Tooltip";
import { IconUser } from "@tabler/icons-react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import LimitedTextInput from "./LimitedTextInput";

interface UsernameInputProps {
  tooltip?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const UsernameInput: React.FC<UsernameInputProps> = ({
  register,
  errors,
  tooltip = true,
}) => {
  const textField = (
    <LimitedTextInput
      register={register}
      errors={errors}
      name="username"
      label="Username"
      maxLength={20}
      minLength={5}
      startIcon={<IconUser />}
    />
  );

  return tooltip ? (
    <Tooltip
      title="Don't worry, you can change your username later"
      placement="top"
    >
      {textField}
    </Tooltip>
  ) : (
    textField
  );
};

export default UsernameInput;
