import LoginForm from "../CustomComponents/LoginForm";
import AuthLayout from "../CustomComponents/AuthLayout";
import AnimatedPage from "../HOC/AnimatedPage";

const Login = () => {
  return (
    <AnimatedPage>
      <AuthLayout heroContent="Welcome Back!" formComponent={<LoginForm />} />
    </AnimatedPage>
  );
};

export default Login;
