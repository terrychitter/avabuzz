import Avatar from "@mui/material/Avatar";
import React from "react";

interface ProfilePictureKitProps {
  pictureWidth?: any;
}

const ProfilePictureKit: React.FC<ProfilePictureKitProps> = ({
  pictureWidth = { xs: "6rem", sm: "8rem", md: "10rem" },
}) => {
  return (
    <Avatar
      alt="User Profile Picture"
      src="/profile_picture.jpg"
      sx={{
        border: "2px solid white",
        boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, 0.3)",
        width: pictureWidth,
        height: "auto",
      }}
    />
  );
};

export default ProfilePictureKit;
