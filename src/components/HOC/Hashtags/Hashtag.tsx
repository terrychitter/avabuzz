import { Box, Stack, Typography, useTheme } from "@mui/material";
import { IconChevronRight, IconHash } from "@tabler/icons-react";
import React from "react";
import { formatNumber } from "../../../utils/formatters";
import Link from "../../CustomComponents/CustomLink";

export interface HashtagProps {
  hashtag: {
    hashtag: string;
    views: number;
  };
}

const Hashtag: React.FC<HashtagProps> = ({ hashtag }) => {
  const theme = useTheme();
  return (
    <Link to={`/hashtags/${hashtag.hashtag}`}>
      <Stack
        direction={"row"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction={"row"} alignItems={"center"} gap={theme.spacing(2)}>
          <Box width={"10%"} textAlign={"center"}>
            <IconHash color={theme.palette.primary.main} />
          </Box>
          <Stack direction={"column"}>
            <Typography variant="h6" component={"p"}>
              {hashtag.hashtag}
            </Typography>
            <Typography>{formatNumber(hashtag.views)} views</Typography>
          </Stack>
        </Stack>
        <IconChevronRight />
      </Stack>
    </Link>
  );
};

export default Hashtag;
