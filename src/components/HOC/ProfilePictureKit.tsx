import Avatar from "@mui/material/Avatar";
import React from "react";

interface ProfilePictureKitProps {
  pictureWidth?: any;
}

const ProfilePictureKit: React.FC<ProfilePictureKitProps> = ({
  pictureWidth = { xs: "6rem", md: "8rem", lg: "9rem" },
}) => {
  return (
    <Avatar
      alt="User Profile Picture"
      src="/profile_picture.jpg"
      sx={{
        border: "2px solid white",
        boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.1)",
        width: pictureWidth,
        height: "auto",
      }}
    />
  );
};

export default ProfilePictureKit;
