import LoginForm from "../CustomComponents/LoginForm";
import AuthLayout from "../CustomComponents/AuthLayout";
import Page from "../HOC/Page";

const Login = () => {
  return (
    <Page>
      <AuthLayout heroContent="Welcome Back!" formComponent={<LoginForm />} />
    </Page>
  );
};

export default Login;
