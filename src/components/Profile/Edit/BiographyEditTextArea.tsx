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
import { IconEye } from "@tabler/icons-react";

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
          right={theme.spacing(0.5)}
          top={theme.spacing(0.5)}
        >
          <AnimatedIconButton onClick={handlePreviewDialogOpen}>
            <IconEye />
          </AnimatedIconButton>
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
