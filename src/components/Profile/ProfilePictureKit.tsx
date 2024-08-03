import Avatar from "@mui/material/Avatar";

const ProfilePictureKit = () => {
  return (
    <Avatar
      alt="User Profile Picture"
      src="/profile_picture.jpg"
      sx={{
        border: "2px solid white",
        boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, 0.5)",
        width: {
          xs: "6rem",
          sm: "8rem",
          md: "10rem",
        },
        height: {
          xs: "6rem",
          sm: "7.5rem",
          md: "10rem",
        },
      }}
    />
  );
};

export default ProfilePictureKit;
