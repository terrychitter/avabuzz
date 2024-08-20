import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconPhotoCancel } from "@tabler/icons-react";

const Debug = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[900]
              : theme.palette.grey[200],
        }}
      >
        <IconPhotoCancel
          size={"25%"}
          style={{
            color:
              theme.palette.mode === "dark"
                ? theme.palette.grey[800]
                : theme.palette.grey[300],
          }}
        />
      </Box>
    </Container>
  );
};

export default Debug;
