import { Box, Typography } from "@mui/material";
import Link from "../../CustomComponents/CustomLink";
import ThemedMarkdown from "../ThemedMarkdown";
import React from "react";

interface GeneralPostProperties {
  link: string;
  postText: string;
}

const GeneralPost: React.FC<GeneralPostProperties> = ({ link, postText }) => {
  return (
    <Link to={link}>
      <Box paddingInline={2}>
        <Typography
          display={"-webkit-box"}
          overflow={"hidden"}
          component={"div"}
          sx={{
            WebkitLineClamp: 10,
            WebkitBoxOrient: "vertical",
            whiteSpace: "normal",
          }}
        >
          <ThemedMarkdown>{postText}</ThemedMarkdown>
        </Typography>
      </Box>
    </Link>
  );
};

export default GeneralPost;
