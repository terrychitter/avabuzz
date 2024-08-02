import AuthLayout from "../CustomComponents/AuthLayout";
import SignupForm from "../CustomComponents/SignupForm";
import Page from "../HOC/Page";

const Signup = () => {
  return (
    <Page>
      <AuthLayout
        heroContent="Create an Account"
        formComponent={<SignupForm />}
      />
    </Page>
  );
};

export default Signup;
