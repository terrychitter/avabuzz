import { Chip, Stack } from "@mui/material";
import React from "react";
import Link from "../../CustomComponents/CustomLink";

interface PostHashtagsGroupProps {
  hashtags: string[];
}

const PostHashtagsGroup: React.FC<PostHashtagsGroupProps> = ({ hashtags }) => {
  return (
    <Stack paddingInline={2} direction={"row"} gap={0.5} flexWrap={"wrap"}>
      {hashtags.map((tag, index) => (
        <Link to={`/hashtags/${tag}`}>
          <Chip key={index} label={`#${tag}`} size="small" />
        </Link>
      ))}
    </Stack>
  );
};

export default PostHashtagsGroup;
