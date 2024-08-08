import { Stack, Typography } from "@mui/material";
import theme from "../../theme/abz_default_theme";
import ContentPaper from "../HOC/ContentPaper";
import { useStandalone } from "../StandaloneContext";
import QRCode from "./QRCode";
import { AspectRatio, BorderAll, WidthFull } from "@mui/icons-material";

const DownloadApp = () => {
  const { isStandalone } = useStandalone();
  return (
    <>
      {!isStandalone && (
        <ContentPaper
          sx={{
            color: theme.palette.common.white,
            backgroundColor: `${theme.palette.custom.darkLightBlack} !important`,
            padding: 1,
            width: "100%",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            background:
              "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
            backgroundSize: "400% 400%",
            animation: "gradient 5s ease infinite",
            "@keyframes gradient": {
              "0%": {
                backgroundPosition: "0% 50%",
              },
              "50%": {
                backgroundPosition: "100% 50%",
              },
              "100%": {
                backgroundPosition: "0% 50%",
              },
            },
          }}
        >
          <Stack
            textAlign={{ sm: "center" }}
            gap={1}
            direction={{ sm: "column", md: "row" }}
            alignItems={"center"}
          >
            <QRCode />
            <Typography component={"p"} variant="h5" fontWeight={"bold"}>
              Download our Mobile App!
            </Typography>
          </Stack>
        </ContentPaper>
      )}
    </>
  );
};

export default DownloadApp;
