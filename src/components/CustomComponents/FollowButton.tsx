import { useTheme } from "@mui/material";
import { IconUserCheck, IconUserPlus } from "@tabler/icons-react";
import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

const FollowButton = () => {
  const [following, setFollowing] = useState(true);
  const theme = useTheme();

  const handleFollowToggle = () => {
    setFollowing((prev) => !prev);
  };

  return (
    <AnimatedButton
      size="small"
      sx={{
        color: following
          ? theme.palette.text.disabled
          : theme.palette.primary.main,
      }}
      startIcon={
        following ? (
          <IconUserCheck size={"1rem"} />
        ) : (
          <IconUserPlus size={"1rem"} />
        )
      }
      onClick={handleFollowToggle}
    >
      {following ? "Following" : "Follow"}
    </AnimatedButton>
  );
};

export default FollowButton;
