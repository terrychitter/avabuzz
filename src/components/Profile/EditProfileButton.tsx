import { IconEdit } from "@tabler/icons-react";
import AnimatedIconButton from "../CustomComponents/AnimatedIconButton";
import Link from "../CustomComponents/CustomLink";

const EditProfileButton = () => {
  return (
    <AnimatedIconButton>
      <Link to="/profile-edit">
        <IconEdit color="white" />
      </Link>
    </AnimatedIconButton>
  );
};

export default EditProfileButton;
