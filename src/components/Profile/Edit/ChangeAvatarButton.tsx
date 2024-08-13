import { styled } from "@mui/system";
import AnimatedButton from "../../CustomComponents/AnimatedButton";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const fileSelectedHandler = (event: { target: { files: any } }) => {
  console.log(event.target.files[0]);
};

const ChangeAvatarButton = () => {
  return (
    <AnimatedButton component="label">
      Change Avatar
      <VisuallyHiddenInput
        type="file"
        accept=".png, .jpg, .jpeg, .webp, .gif"
        onChange={fileSelectedHandler}
      />
    </AnimatedButton>
  );
};

export default ChangeAvatarButton;
