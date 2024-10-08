import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconCheck, IconHash, IconPlus, IconShare } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnimatedButton from "../../CustomComponents/AnimatedButton";
import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import TabNavigation from "../../CustomComponents/TabNavigation";
import AnimatedPage from "../AnimatedPage";
import ItemList from "../ItemList";
import MainContentContainer from "../MainContentContainer";

interface ButtonProps {
  onClick: () => void;
}

const JoinHashtag: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <AnimatedButton
      size="small"
      color="inherit"
      startIcon={<IconPlus style={{ marginInlineEnd: -5 }} size={"1rem"} />}
      sx={{ paddingBlock: 0 }}
      onClick={onClick}
    >
      Follow
    </AnimatedButton>
  );
};

const JoinedHashtag: React.FC<ButtonProps> = ({ onClick }) => {
  const theme = useTheme();
  return (
    <AnimatedButton
      size="small"
      color="inherit"
      startIcon={
        <IconCheck
          style={{ marginInlineEnd: -5 }}
          size={"1rem"}
          color={theme.palette.success.main}
        />
      }
      sx={{ paddingBlock: 0 }}
      onClick={onClick}
    >
      Followed
    </AnimatedButton>
  );
};

const ShareHashtag: React.FC = () => {
  return (
    <AnimatedButton
      size="small"
      color="inherit"
      startIcon={<IconShare style={{ marginInlineEnd: -5 }} size={"1rem"} />}
      sx={{ paddingBlock: 0 }}
    >
      Share
    </AnimatedButton>
  );
};

interface HashtagContentHeaderProps {
  isJoined: boolean;
  onToggleJoin: () => void;
}

const HashtagContentHeader: React.FC<HashtagContentHeaderProps> = ({
  isJoined,
  onToggleJoin,
}) => {
  const theme = useTheme();
  const { hashtag = "" } = useParams<{ hashtag: string }>();
  return (
    <>
      <Stack direction={"row"}>
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          width={"100%"}
          gap={theme.spacing(1)}
        >
          <Stack
            direction={"row"}
            alignContent={"center"}
            gap={theme.spacing(1)}
          >
            <IconHash size={"50px"} color={theme.palette.primary.main} />
            <Typography
              variant={"h4"}
              sx={{
                marginBlockStart: theme.spacing(0.5),
                maxWidth: "80%",
                wordWrap: "break-word",
                whiteSpace: "normal",
              }}
            >
              {hashtag}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={theme.spacing(0.5)}>
            {isJoined ? (
              <JoinedHashtag onClick={onToggleJoin} />
            ) : (
              <JoinHashtag onClick={onToggleJoin} />
            )}
            <ShareHashtag />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        marginBlockStart={1}
        justifyContent={"end"}
        gap={2}
      >
        <Box>
          <Typography>
            <Typography component={"span"} fontWeight={"bold"}>
              1K
            </Typography>{" "}
            Posts
          </Typography>
        </Box>
        <Box>
          <Typography>
            <Typography component={"span"} fontWeight={"bold"}>
              1.2M
            </Typography>{" "}
            Views
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

const HashtagPage: React.FC = () => {
  const { hashtag = "" } = useParams<{ hashtag: string }>();
  const [isJoined, setIsJoined] = useState(true);
  const navigate = useNavigate();

  const tabs = [
    {
      label: "Trending",
      component: (
        <Box paddingInline={1}>
          <ItemList pullToRefresh items={null}></ItemList>
        </Box>
      ),
    },
    {
      label: "Recent",
      component: (
        <Box paddingInline={1}>
          <ItemList pullToRefresh items={null}></ItemList>
        </Box>
      ),
    },
  ];

  const handleTabChange = (index: number) => {
    const paths = ["trending", "recent"];
    navigate(`/hashtags/${hashtag}#${paths[index]}`);
  };

  const handleToggleJoin = () => {
    setIsJoined(!isJoined);
  };

  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer
          title=""
          headerContent={
            <HashtagContentHeader
              isJoined={isJoined}
              onToggleJoin={handleToggleJoin}
            />
          }
        />
        <TabNavigation tabs={tabs} updateUrl={handleTabChange} />
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default HashtagPage;
