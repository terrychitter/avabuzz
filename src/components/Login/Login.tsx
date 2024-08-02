import LoginForm from "../CustomComponents/LoginForm";
import AuthLayout from "../CustomComponents/AuthLayout";

const Login = () => {
  return (
    <AuthLayout heroContent="Welcome Back!" formComponent={<LoginForm />} />
  );
};

export default Login;
