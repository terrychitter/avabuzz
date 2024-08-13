import { Stack, Typography, useTheme } from "@mui/material";
import {
  IconLayoutCollage,
  IconVideo,
  IconWritingSign,
} from "@tabler/icons-react";
import AnimatedIconButton from "../../CustomComponents/AnimatedIconButton";
import ContentPaperWithHeader from "../ContentPaperWithHeader";
import Link from "../CustomLink";

type PostOptionProps = {
  to: string;
  bgColor: string;
  label: string;
  icon: React.ReactNode;
};

const PostOption: React.FC<PostOptionProps> = ({
  to,
  bgColor,
  label,
  icon,
}) => {
  const theme = useTheme(); // Access the theme

  return (
    <Stack direction={"column"} textAlign={"center"} gap={1}>
      <Link to={to}>
        <AnimatedIconButton
          sx={{
            width: "60px",
            height: "60px",
            backgroundColor: bgColor,
            color: theme.palette.getContrastText(bgColor), // Use theme here
            "&:hover": {
              color: "#ffffff",
            },
          }}
          size="large"
        >
          {icon}
        </AnimatedIconButton>
      </Link>
      <Typography variant="body1" color={theme.palette.text.secondary}>
        {label}
      </Typography>
    </Stack>
  );
};

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
          icon={<IconWritingSign />}
        />
        <PostOption
          to="/post?image"
          bgColor="#80a8ff"
          label="Image"
          icon={<IconLayoutCollage />}
        />
        <PostOption
          to="/post?video"
          bgColor="#ff9980"
          label="Video"
          icon={<IconVideo />}
        />
      </Stack>
    </ContentPaperWithHeader>
  );
};

export default PostNow;
