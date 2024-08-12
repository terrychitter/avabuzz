import React from "react";
import UserItem from "./UserItem";

const UserList = (actionButton: () => React.ReactNode) => {
  const boxes = Array.from({ length: 10 }, (_, index) => (
    <UserItem key={index} actionButton={actionButton()} />
  ));
  return boxes; // Return the array of elements
};

export default UserList;
