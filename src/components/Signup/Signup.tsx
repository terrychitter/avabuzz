import AuthLayout from "../CustomComponents/AuthLayout";
import SignupForm from "../CustomComponents/SignupForm";
import AnimatedPage from "../HOC/AnimatedPage";

const Signup = () => {
  return (
    <AnimatedPage>
      <AuthLayout
        heroContent="Create an Account"
        formComponent={<SignupForm />}
      />
    </AnimatedPage>
  );
};

export default Signup;
