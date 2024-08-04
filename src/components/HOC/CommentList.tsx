import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const CommentList = () => {
  const theme = useTheme();
  const boxes = Array.from({ length: 0 }, (_, index) => (
    <Box key={index} border={`1px solid ${theme.palette.text.secondary}`}>
      Comment {index + 1}
    </Box>
  ));
  return boxes;
};

export default CommentList;
