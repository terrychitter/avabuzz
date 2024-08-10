import { Stack, Typography } from "@mui/material";
import ContentPaperWithHeader from "../ContentPaperWithHeader";
import Link from "../CustomLink";
import AnimatedIconButton from "../../CustomComponents/AnimatedIconButton";
import { Create, Image, VideoLibrary } from "@mui/icons-material";
import theme from "../../../theme/abz_dark_theme";

type PostOptionProps = {
  to: string;
  bgColor: string;
  label: string;
  icon: React.ReactNode;
};

const PostOption = ({ to, bgColor, label, icon }: PostOptionProps) => (
  <Stack direction={"column"} textAlign={"center"} gap={1}>
    <Link to={to}>
      <AnimatedIconButton
        sx={{
          width: "60px",
          height: "60px",
          backgroundColor: bgColor,
          color: theme.palette.getContrastText(bgColor),
          "&:hover": {
            color: "#ffffff",
          },
        }}
        size="large"
      >
        {icon}
      </AnimatedIconButton>
    </Link>
    <Typography variant="body1" color="textSecondary">
      {label}
    </Typography>
  </Stack>
);

const PostNow = () => {
  return (
    <ContentPaperWithHeader header="Post Now">
      <Stack
        paddingInline={2}
        direction={{ xs: "row", sm: "column", md: "row" }}
        justifyContent={"center"}
        gap={{ xs: 4, sm: 2, md: 4 }}
      >
        <PostOption
          to="/post"
          bgColor="#99ff99"
          label="Post"
          icon={<Create />}
        />
        <PostOption
          to="/post?image"
          bgColor="#80a8ff"
          label="Image"
          icon={<Image />}
        />
        <PostOption
          to="/post?video"
          bgColor="#ff9980"
          label="Video"
          icon={<VideoLibrary />}
        />
      </Stack>
    </ContentPaperWithHeader>
  );
};

export default PostNow;
