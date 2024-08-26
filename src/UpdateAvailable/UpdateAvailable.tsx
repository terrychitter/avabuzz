import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import AnimatedButton from "../components/CustomComponents/AnimatedButton";
import updateImg from "./updated_img.png";
import { useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

const UpdatedAvailable = () => {
  const {
    needRefresh: [needRefresh],
    offlineReady: [offlineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(r) {
      console.log("SW Registered: ", r);
      console.log("Need Refresh? ", needRefresh);
      console.log("Offline Ready? ", offlineReady);
    },
    onRegisterError(e) {
      console.log("SW Register Error: ", e);
    },
  });

  const [open, setOpen] = useState(needRefresh);

  const closeDialog = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    updateServiceWorker(true);
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Update Available</DialogTitle>
        <DialogContent
          sx={{
            textAlign: "left",
          }}
        >
          <Stack direction={"column"} gap={2}>
            <Typography>An update is available.</Typography>
            <Box>
              <img
                src={updateImg}
                alt="update"
                style={{
                  width: "100%",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            </Box>
            <Typography>
              This update includes new features, improvements and bug fixes.
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <AnimatedButton color="inherit" onClick={closeDialog}>
            Later
          </AnimatedButton>
          <AnimatedButton onClick={handleUpdate}>Reload</AnimatedButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdatedAvailable;
