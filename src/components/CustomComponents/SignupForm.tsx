import { CircularProgress, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import AnimatedButton from "./AnimatedButton";
import ConfirmPasswordInputGroup from "./ConfirmPasswordInputGroup";
import Link from "./CustomLink";
import EmailInput from "./EmailInput";
import UsernameInput from "./UsernameInput";

const SignupForm = () => {
  // Access the theme
  const theme = useTheme();

  //   Use react hook form
  const methods = useForm<FieldValues>();

  // Handle form submission
  const onSubmit = async (data: FieldValues) => {
    // TODO: Submit to API
    console.log("data", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Box>
          <Typography variant="h4" sx={{ marginBottom: theme.spacing(1) }}>
            Create Account
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: theme.spacing(3) }}>
            Create your account to be able to post, create or join groups and so
            much more!
          </Typography>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <UsernameInput
              register={methods.register}
              errors={methods.formState.errors}
            />
            <EmailInput
              register={methods.register}
              errors={methods.formState.errors}
            />
            <ConfirmPasswordInputGroup
              register={methods.register}
              errors={methods.formState.errors}
            />
            <AnimatedButton
              disabled={methods.formState.isSubmitting}
              fullWidth
              type="submit"
              variant="contained"
              sx={{ marginTop: theme.spacing(7) }}
              startIcon={
                methods.formState.isSubmitting && <CircularProgress size={24} />
              }
            >
              {methods.formState.isSubmitting ? null : "Create Account"}
            </AnimatedButton>
          </form>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: theme.spacing(2),
          }}
        >
          <Stack
            display={"flex"}
            direction={{ sm: "column", md: "row" }}
            alignItems={"center"}
          >
            <Typography variant="body2" marginInlineEnd={1}>
              Already have an account?
            </Typography>
            <Link to="/login">Sign In</Link>
          </Stack>
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default SignupForm;
