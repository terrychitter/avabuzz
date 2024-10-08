import { Avatar, AvatarGroup } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconHeartFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";
import { PostType } from "../../context/PostContext";

interface ReactionsGroupProps {
  priorityReaction?: string;
  reactions: PostType["reactions"];
}

const ReactionsGroup: React.FC<ReactionsGroupProps> = ({
  priorityReaction,
  reactions = [],
}) => {
  const theme = useTheme();

  // Create a list with priorityReaction first, then the rest of the reactions
  const orderedReactions = [
    ...(priorityReaction ? [priorityReaction] : []),
    ...reactions.filter(
      (reaction) => reaction.type !== priorityReaction && reaction.count > 0
    ),
  ];

  const handleReactionGroupClick = () => {
    // if (reacted) {
    //   // Update the post context
    //   setPost((prevPost) => {
    //     return {
    //       ...prevPost,
    //       userReaction: {
    //         reacted: false,
    //         reaction: "",
    //       },
    //       reactCount: prevPost.reactCount - 1,
    //     };
    //   });
    // }
  };

  return (
    <>
      {orderedReactions.length > 0 && (
        <AvatarGroup
          max={3}
          onClick={handleReactionGroupClick}
          slotProps={{
            additionalAvatar: {
              style: {
                display: "none",
              },
            },
          }}
        >
          {orderedReactions.map((reaction, index) =>
            reaction === priorityReaction ? (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: [0.8, 1.2, 1], opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Avatar
                  alt={reaction}
                  src={
                    reaction !== "like"
                      ? `/post_reactions/${reaction}.png`
                      : undefined
                  }
                  sx={{
                    width: "1.3rem",
                    height: "1.3rem",
                    border: "none !important",
                    padding: "0.1rem",
                    overflow: "visible",
                    backgroundColor: "transparent",
                    marginBlockStart: -0.2,
                  }}
                >
                  {reaction === "like" && (
                    <IconHeartFilled
                      color={theme.palette.error.main}
                      size="1.5rem"
                      style={{
                        transform: "scale(1.2)",
                        paddingBlockEnd: "0.1rem",
                      }}
                    />
                  )}
                </Avatar>
              </motion.div>
            ) : (
              <Avatar
                key={index}
                src={
                  typeof reaction !== "string" && reaction.type
                    ? `/post_reactions/${reaction.type}.png`
                    : undefined
                }
                sx={{
                  width: "1.3rem",
                  height: "1.3rem",
                  border: "none !important",
                  padding: 0,
                  overflow: "visible",
                  backgroundColor: "transparent",
                }}
              >
                {reaction === "like" && (
                  <IconHeartFilled
                    color={theme.palette.error.main}
                    size="1.5rem"
                    style={{
                      transform: "scale(1.2)",
                    }}
                  />
                )}
              </Avatar>
            )
          )}
        </AvatarGroup>
      )}
    </>
  );
};

export default ReactionsGroup;
