import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const PostList = () => {
  const theme = useTheme();
  const boxes = Array.from({ length: 0 }, (_, index) => (
    <Box key={index} border={`1px solid ${theme.palette.text.secondary}`}>
      Post {index + 1}
    </Box>
  ));
  return boxes;
};

export default PostList;
