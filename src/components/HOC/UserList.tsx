import AnimatedButton from "../CustomComponents/AnimatedButton";
import UserItem from "./UserItem";

const UserList = () => {
  const boxes = Array.from({ length: 10 }, (_, index) => (
    <UserItem
      key={index}
      actionButton={<AnimatedButton>Follow</AnimatedButton>}
    />
  ));
  return boxes;
};

export default UserList;
