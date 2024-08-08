import { Stack, Typography } from "@mui/material";
import theme from "../../theme/abz_default_theme";
import ContentPaper from "../HOC/ContentPaper";
import { useStandalone } from "../StandaloneContext";
import QRCode from "./QRCode";

const DownloadApp = () => {
  const { isStandalone } = useStandalone();
  return (
    <>
      {!isStandalone && (
        <ContentPaper
          sx={{
            color: theme.palette.common.white,
            padding: { xs: 2, md: 2 },
            width: "100%",
            backgroundColor: theme.palette.common.black,
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
