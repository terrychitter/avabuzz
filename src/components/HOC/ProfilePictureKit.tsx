import Avatar from "@mui/material/Avatar";
import React from "react";
import Link from "../CustomComponents/CustomLink";

interface ProfilePictureKitProps {
  pictureWidth?: any;
  pictureUrl?: string;
  link?: string; // Make the link prop required
}

const ProfilePictureKit: React.FC<ProfilePictureKitProps> = ({
  pictureWidth = { xs: "6rem", md: "8rem", lg: "9rem" },
  pictureUrl = "",
  link = "/profile",
}) => {
  return (
    <Link to={link}>
      <Avatar
        alt=""
        src={pictureUrl}
        sx={{
          border: "2px solid white",
          boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.1)",
          width: pictureWidth,
          height: pictureWidth,
        }}
      />
    </Link>
  );
};

export default ProfilePictureKit;
