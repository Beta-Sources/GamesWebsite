import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../components/welcomeNav";
import SignUpForm from "../components/SignupForm";


const SignUp = () => {
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
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
