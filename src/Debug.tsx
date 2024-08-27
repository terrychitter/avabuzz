import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import AnimatedButton from "./components/CustomComponents/AnimatedButton";

const Debug = () => {
  return (
    <>
      <style>
        {`
        .dialog-title {
          background: rgb(45,122,195);
          background: -moz-linear-gradient(90deg, rgba(45,122,195,1) 0%, rgba(205,101,240,1) 50%, rgba(205,28,191,1) 100%);
          background: -webkit-linear-gradient(90deg, rgba(45,122,195,1) 0%, rgba(205,101,240,1) 50%, rgba(205,28,191,1) 100%);
          background: linear-gradient(90deg, rgba(45,122,195,1) 0%, rgba(205,101,240,1) 50%, rgba(205,28,191,1) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2d7ac3",endColorstr="#cd1cbf",GradientType=1);
        }

        .gradient-text {
          background: rgb(45,122,195);
          background: -moz-linear-gradient(90deg, rgba(45,122,195,1) 0%, rgba(205,101,240,1) 50%, rgba(205,28,191,1) 100%);
          background: -webkit-linear-gradient(90deg, rgba(45,122,195,1) 0%, rgba(205,101,240,1) 50%, rgba(205,28,191,1) 100%);
          background: linear-gradient(90deg, rgba(45,122,195,1) 0%, rgba(205,101,240,1) 50%, rgba(205,28,191,1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        `}
      </style>
      <Dialog open={true} maxWidth={"xs"}>
        <DialogTitle className="dialog-title" color={"white"}>
          <Typography variant={"h5"} component={"h2"}>
            NEW CONTENT AVAILABLE
          </Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            marginBlockStart: 4,
          }}
        >
          <Typography fontSize={"0.9rem"}>
            Cool new content is available! 🎊 We've made some changes to the app
            that we think you'll love.
          </Typography>
        </DialogContent>
        <DialogActions>
          <AnimatedButton color="inherit">Later</AnimatedButton>
          <AnimatedButton className="gradient-text">Reload</AnimatedButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Debug;
