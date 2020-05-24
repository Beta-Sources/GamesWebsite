import Container from "react-bootstrap/Container";
import NavBar from "../components/welcomeNav";
import SignInForm from "../components/SigninForm";
import style from "../styles/SignInUpForm.module.scss";
const SignIn = () => {
  return (
    <Container
      style={{
        marginTop: "10rem",
        maxWidth: "35rem",
        padding: "1rem",
        border: "lightgrey 0.5px ",
        boxShadow: "10px 10px 2px lightgrey",
        borderRadius: "5px"
      }}
    >
      <NavBar />
      <SignInForm />
    </Container>
  );
};

export default SignIn;
