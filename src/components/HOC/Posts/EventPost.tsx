import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  IconCalendarClock,
  IconConfetti,
  IconPointFilled,
} from "@tabler/icons-react";
import { ping } from "ldrs";
import { formatDate } from "../../../utils/formatters";
import Link from "../../CustomComponents/CustomLink";
import PostActionKit from "../PostActionKit";
import ProfilePictureKit from "../ProfilePictureKit";
import ThemedMarkdown from "../ThemedMarkdown";
import UsernameKit from "../UsernameKit";
import { usePostContext } from "./Post";
import PostActions from "./PostActions";
import PostHashtagsGroup from "./PostHashtagsGroup";
import { ZoomableImageProps } from "../../../components/CustomComponents/ZoomableImage";
import { loadable } from "../../../utils/loadable";
import DefaultLoader from "../../CustomComponents/DefaultLoader";

const ZoomableImage: React.FC<ZoomableImageProps> = loadable(
  () => import("../../../components/CustomComponents/ZoomableImage"),
  {
    fallback: <DefaultLoader />,
  }
);

const EventPost = () => {
  const theme = useTheme();
  const { post } = usePostContext();

  const EventDateChip = () => {
    const eventDuration = `${
      post.event?.startDate ? formatDate(post.event.startDate) : "N/A"
    } - ${post.event?.endDate ? formatDate(post.event.endDate) : "N/A"}`;
    return (
      <Chip
        label={
          <Stack direction={"row"} alignItems={"center"} gap={0.5}>
            <IconCalendarClock
              size={"1rem"}
              color={theme.palette.secondary.contrastText}
              stroke={1.5}
            />
            <Box marginBlockStart={theme.spacing(0.4)}>
              <Typography fontSize={"0.7rem"}>{eventDuration}</Typography>
            </Box>
          </Stack>
        }
        size="small"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
        }}
      />
    );
  };

  const OngoingChip = () => {
    ping.register();
    return (
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        marginInlineStart={theme.spacing(-0.5)}
      >
        <l-ping size={20} color={theme.palette.success.main} />
        <Typography
          color={theme.palette.success.main}
          sx={{
            marginBlockStart: theme.spacing(0.5),
          }}
        >
          Ongoing
        </Typography>
      </Stack>
    );
  };

  const EndedChip = () => {
    return (
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        marginInlineStart={theme.spacing(-0.5)}
      >
        <IconPointFilled size={20} color={theme.palette.grey[600]} />
        <Typography
          color={theme.palette.grey[600]}
          sx={{
            marginBlockStart: theme.spacing(0.5),
          }}
        >
          Ended
        </Typography>
      </Stack>
    );
  };

  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Chip
          label={"Event"}
          size="small"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            marginInlineStart: theme.spacing(1.7),
            borderRadius: "10px",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
        {(post.event?.status === "ongoing" && (
          <Chip
            label={<OngoingChip />}
            color="success"
            size="small"
            sx={{
              marginInlineStart: theme.spacing(1.7),
              borderRadius: "10px",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              "&.MuiChip-root": {
                backgroundColor: "transparent",
              },
            }}
          />
        )) ||
          (post.event?.status === "ended" && (
            <Chip
              label={<EndedChip />}
              color="error"
              size="small"
              sx={{
                marginInlineStart: theme.spacing(1.7),
                borderRadius: "10px",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                "&.MuiChip-root": {
                  backgroundColor: "transparent",
                },
              }}
            />
          ))}
      </Stack>
      <Card
        variant="outlined"
        sx={{
          minHeight: 150,
          borderColor: theme.palette.primary.main,
        }}
      >
        <CardHeader
          avatar={
            <ProfilePictureKit
              link={`/profile/${post.userPublicId}`}
              pictureWidth={{ xs: "3rem" }}
              pictureUrl={post.profilePictureUrl}
            />
          }
          title={
            <UsernameKit
              username={post.username}
              badgeUrl={post.profileBadgeUrl}
            />
          }
          action={<PostActionKit />}
          subheader={formatDate(post.date)}
        />
        <CardContent
          sx={{
            padding: 0,
          }}
        >
          <Stack direction={"column"}>
            <Box position={"relative"}>
              <ZoomableImage>
                <img
                  src={post.event?.bannerUrl}
                  alt={"Event Banner"}
                  style={{
                    width: "100%",
                    aspectRatio: "4/2",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </ZoomableImage>
              <Box
                position={"absolute"}
                left={theme.spacing(1)}
                top={theme.spacing(1)}
                zIndex={2}
              >
                <Stack>
                  <IconConfetti color="white" />
                </Stack>
              </Box>
              <Box
                position={"absolute"}
                bottom={theme.spacing(1.2)}
                left={theme.spacing(0.5)}
                zIndex={2}
              >
                <EventDateChip />
              </Box>
            </Box>
            <Box paddingInline={1}>
              <Link to={`/posts/${post.postId}`}>
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
                  <Typography
                    variant={"h5"}
                    component={"h1"}
                    fontWeight={"bold"}
                    color={theme.palette.primary.main}
                    marginBlockEnd={theme.spacing(1)}
                  >
                    {post.event?.title}
                  </Typography>
                  <ThemedMarkdown>{post.text}</ThemedMarkdown>
                </Typography>
              </Link>
            </Box>
          </Stack>
        </CardContent>
        <PostHashtagsGroup hashtags={post.hashtags} />
        <CardActions
          sx={{
            paddingInline: theme.spacing(2),
            justifyContent: "space-between",
          }}
        >
          <PostActions />
        </CardActions>
      </Card>
    </>
  );
};

export default EventPost;
