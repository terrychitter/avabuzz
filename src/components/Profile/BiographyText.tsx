import { Box, Typography, useTheme } from "@mui/material";
import { IconBook } from "@tabler/icons-react";

const BiographyText = () => {
  const theme = useTheme();

  const text = `My Awesome Biography! 🚀`;

  return (
    <Box display={"inline-flex"} alignItems={"center"}>
      <IconBook
        size={theme.typography.h6.fontSize}
        color={theme.palette.text.secondary}
        style={{
          marginInlineEnd: theme.spacing(1),
          marginBlockStart: theme.spacing(-0.5),
        }}
      />
      <Typography
        component={"span"}
        fontWeight={100}
        color={theme.palette.text.secondary}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default BiographyText;
