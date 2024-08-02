import AuthLayout from "../CustomComponents/AuthLayout";
import SignupForm from "../CustomComponents/SignupForm";

const Signup = () => {
  return (
    <AuthLayout
      heroContent="Create an Account"
      formComponent={<SignupForm />}
    />
  );
};

export default Signup;
