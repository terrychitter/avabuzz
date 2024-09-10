import { Stack, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { AxiosError } from "axios";
import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { FieldValues, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { login } from "../../api/auth/login";
import { useErrorPopup } from "../../Context/ErrorPopupContext";
import Button from "./AnimatedButton";
import Link from "./CustomLink";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import TmCnCheck from "./TmCnCheck";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const theme = useTheme();
  const signIn = useSignIn();
  const navigate = useNavigate();
  const { showError } = useErrorPopup();

  const [loginData, setLoginData] = useState<FieldValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    setLoginData(data);
  };

  const onSettled = () => {
    setIsSubmitting(false);
    reset();
  };

  const handleSuccess = (accessToken: string) => {
    if (
      signIn({
        auth: {
          token: accessToken,
          type: "Bearer",
        },
        userState: {
          email: loginData?.email,
        },
      })
    ) {
      // Navigate to the home page
      navigate("/");
    } else {
      showError("An error occurred while logging in");
    }
  };

  const handleLoginError = (message: string) => {
    setIsSubmitting(false);
    showError(message);
  };

  // Use react query
  useQuery({
    queryKey: ["login", loginData],
    queryFn: () => login(loginData?.email, loginData?.password),
    enabled: !!loginData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    onSettled: () => {
      onSettled();
    },
    onSuccess: (data) => {
      setIsSubmitting(false);
      handleSuccess(data.data.access_token);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          handleLoginError("Incorrect email or password");
        }
      } else {
        handleLoginError("An error occurred while logging in");
      }
    },
  });

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
            <PasswordInput
              register={register}
              errors={errors}
              newPassword={false}
            />
            <TmCnCheck control={control} errors={errors} />
            <Button
              disabled={isSubmitting}
              fullWidth
              type="submit"
              variant="contained"
              sx={{ marginTop: theme.spacing(7), borderRadius: 1 }}
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
