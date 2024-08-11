import { Stack, Typography } from "@mui/material";
import React from "react";
import ProfilePictureKit from "./ProfilePictureKit";
import UsernameKit from "./UsernameKit";

interface UserItemProps {
  actionButton?: React.ReactNode;
}

const UserItem: React.FC<UserItemProps> = ({ actionButton }) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack direction={"row"} gap={2}>
        <ProfilePictureKit pictureWidth={50} />
        <Stack direction={"column"} gap={1}>
          <UsernameKit />
          <Typography variant={"body2"} color={"textSecondary"}>
            Biography Text
          </Typography>
        </Stack>
      </Stack>
      {actionButton}
    </Stack>
  );
};

export default UserItem;
