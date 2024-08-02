import { Stack, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "./AnimatedButton";
import CircularProgress from "@mui/material/CircularProgress";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import TmCnCheck from "./TmCnCheck";
import Link from "./CustomLink";
import { FieldValues, useForm } from "react-hook-form";

const LoginForm = () => {
  const theme = useTheme();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // TODO: Submit to API
    console.log("data", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Box>
          <Typography variant="h4" sx={{ marginBottom: theme.spacing(1) }}>
            Login
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: theme.spacing(3) }}>
            Sign in to continue
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <TmCnCheck control={control} errors={errors} />
            <Button
              disabled={isSubmitting}
              fullWidth
              type="submit"
              variant="contained"
              sx={{ marginTop: theme.spacing(7) }}
              startIcon={isSubmitting && <CircularProgress size={24} />}
            >
              {isSubmitting ? null : "Login"}
            </Button>
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
              Don't have an account?
            </Typography>
            <Link to="/create-account">Create an Account</Link>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default LoginForm;
