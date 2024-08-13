import PreviewIcon from "@mui/icons-material/Preview";
import {
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import AnimatedIconButton from "../../CustomComponents/AnimatedIconButton";

const BiographyEditTextArea = () => {
  const [biographyText, setBiographyText] = useState<string>("");
  const [previewDialogOpen, setPreviewDialogOpen] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBiographyText(event.target.value);
  };

  const handlePreviewDialogOpen = () => {
    setPreviewDialogOpen(!previewDialogOpen);
  };

  const theme = useTheme();
  return (
    <>
      <Stack position={"relative"}>
        <TextField
          fullWidth
          multiline
          rows={10}
          value={biographyText}
          onChange={onChange}
        />
        <Stack
          position={"absolute"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          right={theme.spacing(0.5)}
          top={theme.spacing(0.5)}
        >
          <AnimatedIconButton onClick={handlePreviewDialogOpen}>
            <PreviewIcon />
          </AnimatedIconButton>
          <Typography fontSize={"0.5rem"} marginBlockStart={-0.5}>
            Preview
          </Typography>
        </Stack>
      </Stack>
      <Dialog
        onClose={handlePreviewDialogOpen}
        open={previewDialogOpen}
        fullScreen
      >
        <DialogTitle>Preview Biography</DialogTitle>
      </Dialog>
    </>
  );
};

export default BiographyEditTextArea;
