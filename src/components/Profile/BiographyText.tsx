import { Box, Typography, useTheme } from "@mui/material";
import { IconBook } from "@tabler/icons-react";
import { useUser } from "../../context/UserContext";

const BiographyText = () => {
  const theme = useTheme();

  // Get biography from context
  const user = useUser().user;
  const biography = user ? user.biography : null;

  return (
    <Box display={"inline-flex"} alignItems={"center"}>
      <IconBook
        size={theme.typography.h6.fontSize}
        color={
          biography ? theme.palette.text.secondary : theme.palette.text.disabled
        }
        style={{
          marginInlineEnd: theme.spacing(1),
          marginBlockStart: theme.spacing(-0.5),
        }}
      />
      <Typography
        component={"span"}
        fontWeight={100}
        color={
          biography ? theme.palette.text.secondary : theme.palette.text.disabled
        }
      >
        {biography || "No biography..."}
      </Typography>
    </Box>
  );
};

export default BiographyText;
