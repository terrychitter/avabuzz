import { Stack, Typography, useTheme } from "@mui/material";
import ContentPaper from "../../HOC/ContentPaper";
import { useStandalone } from "../../StandaloneContext";
import QRCode from "../QRCode";

const DownloadApp = () => {
  const { isStandalone } = useStandalone();
  const theme = useTheme();
  return (
    <>
      {!isStandalone && (
        <ContentPaper
          sx={{
            padding: { xs: 2, md: 2 },
            width: "100%",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Stack
            textAlign={{ sm: "center" }}
            gap={2}
            direction={{ xs: "row", sm: "column", md: "row" }}
            alignItems={"start"}
          >
            <QRCode />
            <Typography
              component={"p"}
              variant="h5"
              fontWeight={"bold"}
              textAlign={{ sm: "center", md: "left" }}
            >
              Download our Mobile App!
            </Typography>
          </Stack>
        </ContentPaper>
      )}
    </>
  );
};

export default DownloadApp;
