import { Stack, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { AxiosError } from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useAuth";
import AppErrorPopup from "../ErrorHandling/AppErrorPopup";
import Button from "./AnimatedButton";
import Link from "./CustomLink";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import TmCnCheck from "./TmCnCheck";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // Use useLogin hook
  const { mutate: login, isLoading, error } = useLogin();
  const navigate = useNavigate();
  const theme = useTheme();
  // Use react hook form
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = (data: FieldValues) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    login(loginData, {
      onSuccess: () => {
        navigate("/");
      },
    });

    if (error) {
      reset();
    }
  };

  return (
    <>
      {error && (
        <>
          {error instanceof AxiosError ? (
            error.response?.status === 401 ? (
              <AppErrorPopup message="Incorrect Email or Password" />
            ) : (
              <AppErrorPopup message="An unexpected error occurred. Please try again later." />
            )
          ) : (
            <AppErrorPopup message="An unexpected error occurred. Please try again later." />
          )}
        </>
      )}
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
            <PasswordInput
              register={register}
              errors={errors}
              newPassword={false}
            />
            <TmCnCheck control={control} errors={errors} />
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
              variant="contained"
              sx={{ marginTop: theme.spacing(7), borderRadius: 1 }}
              startIcon={isLoading && <CircularProgress size={24} />}
            >
              {isLoading ? null : "Login"}
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
