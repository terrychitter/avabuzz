import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import AnimatedButton from "../../CustomComponents/AnimatedButton";
import DefaultLoader from "../../CustomComponents/DefaultLoader";

// Returns approximate size of a single cache (in bytes)
function cacheSize(c: Cache): Promise<number> {
  return c.keys().then((requests) => {
    return Promise.all(
      requests.map((req) =>
        c.match(req).then(
          (response) =>
            response
              ?.clone()
              .blob()
              .then((blob) => blob.size) ?? 0
        )
      )
    ).then((sizes) => sizes.reduce((total, size) => total + size, 0));
  });
}

// Returns approximate size of all caches (in bytes)
function cachesSize(): Promise<number> {
  return caches.keys().then((cacheNames) => {
    return Promise.all(
      cacheNames.map((name) =>
        caches.open(name).then((cache) => cacheSize(cache))
      )
    ).then((sizes) => sizes.reduce((total, size) => total + size, 0));
  });
}

// Function to get cache size in MB
async function getCacheSize(): Promise<string> {
  const totalSizeBytes = await cachesSize();
  // Convert bytes to MB and return
  return (totalSizeBytes / (1024 * 1024)).toFixed(2);
}

// Function to clear the cache
const clearCache = async () => {
  const cacheNames = await caches.keys();
  for (const cacheName of cacheNames) {
    await caches.delete(cacheName);
  }
};

const ClearCacheButton = () => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);
  const [cacheSize, setCacheSize] = useState("0.00");

  useEffect(() => {
    const fetchCacheSize = async () => {
      const size = await getCacheSize();
      setCacheSize(size);
    };
    fetchCacheSize();
  }, []);

  const toggleConfirmDialog = () => {
    setConfirmOpen(!confirmOpen);
  };

  const handleClearCacheClick = async () => {
    toggleConfirmDialog(); // Close confirmation dialog
    setProcessOpen(true); // Open process dialog

    try {
      await clearCache();
      setCacheSize("0.00");
      console.log("Cache cleared");
    } catch (error) {
      console.error("Error clearing cache:", error);
    } finally {
      // Ensure the dialog stays open for at least 2 seconds
      setTimeout(() => {
        setProcessOpen(false); // Close process dialog after 2 seconds
      }, 2000);
    }
  };

  return (
    <>
      <Button
        onClick={toggleConfirmDialog}
        color="error"
        sx={{
          textAlign: "right",
        }}
      >
        {cacheSize} MB
      </Button>
      <Dialog
        maxWidth="xs"
        open={confirmOpen}
        onClose={toggleConfirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Clear Cache?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to clear the cache? This will remove all
            cached files and data.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <AnimatedButton
            variant="contained"
            onClick={toggleConfirmDialog}
            sx={(theme) => ({
              color: theme.palette.action.disabled, // Text color of a disabled button
              backgroundColor: theme.palette.action.disabledBackground, // Background color of a disabled button
              "&:hover": {
                backgroundColor: theme.palette.action.disabledBackground, // Maintain disabled background on hover
              },
            })}
          >
            Cancel
          </AnimatedButton>
          <AnimatedButton
            variant="contained"
            onClick={handleClearCacheClick}
            autoFocus
          >
            Continue
          </AnimatedButton>
        </DialogActions>
      </Dialog>
      <Dialog
        maxWidth="xs"
        open={processOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "transparent !important",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent>
          <Box>
            <DefaultLoader loadingText="Clearing Cache" type="helix" />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClearCacheButton;
