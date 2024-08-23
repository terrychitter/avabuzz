import { Stack, Typography } from "@mui/material";
import React from "react";
import Link from "../CustomComponents/CustomLink";
import ProfilePictureKit from "./ProfilePictureKit";
import UsernameKit from "./UsernameKit";

interface UserItemProps {
  actionButton?: React.ReactNode;
}

const UserItem: React.FC<UserItemProps> = ({ actionButton }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems="center"
      marginBlockEnd={1}
    >
      <Link to="/profile/XXX-XXX" sx={{ flexGrow: 1 }}>
        <Stack direction={"row"} gap={2} alignItems="center">
          <ProfilePictureKit pictureWidth={50} />
          <Stack direction={"column"} gap={1} flexGrow={1} overflow="hidden">
            <UsernameKit />
            <Typography
              variant={"body2"}
              color={"textSecondary"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
              whiteSpace={"nowrap"}
              maxWidth={{ xs: "200px", md: "350px", lg: "500px" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos dolor hic numquam repellat blanditiis reiciendis nobis
              quidem ullam? Accusantium consectetur, dignissimos deleniti optio
              est nihil nam ullam in magni unde.
            </Typography>
          </Stack>
        </Stack>
      </Link>
      {actionButton}
    </Stack>
  );
};

export default UserItem;
