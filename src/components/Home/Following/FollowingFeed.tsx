import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconArrowBadgeRightFilled } from "@tabler/icons-react";
import Link from "../../CustomComponents/CustomLink";
import ItemList from "../../HOC/ItemList";

const FollowingFeed = () => {
  const theme = useTheme();
  return (
    <>
      <Box marginBlockEnd={theme.spacing(1)}>
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          alignItems={"center"}
        >
          <Typography variant="h6">Hashtags you follow</Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={theme.spacing(0.5)}
          >
            <Link to="/followed-hashtags">See all</Link>
            <IconArrowBadgeRightFilled
              size={"1rem"}
              style={{ marginBlockStart: theme.spacing(-0.2) }}
            />
          </Stack>
        </Stack>
        <ItemList
          noItemsMessage="No hashtags to show"
          showEndDivider={false}
          items={null}
        ></ItemList>
      </Box>
      <ItemList
        noItemsMessage="Nothing to show"
        pullToRefresh
        items={null}
      ></ItemList>
    </>
  );
};

export default FollowingFeed;
