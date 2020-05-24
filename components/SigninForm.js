import { useContext, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import style from "../styles/SignInUpForm.module.scss";
import { AuthContext } from "../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Signin() {
  const Router = useRouter();
  const { login } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    password: "",
    rememberme: false
  });
  const handleChange = e => {
    switch (e.target.name) {
      case "email":
        setState({
          ...state,
          email: e.target.value
        });
        break;
      case "password":
        setState({
          ...state,
          password: e.target.value
        });
        break;
      case "RememberMe":
        setState({
          ...state,
          rememberme: e.target.checked
        });
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    login(state);
  };

  return (
    <Container className={style.signincontainer}>
      <Form className="sign-in" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
            value={state.email}
            required
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={state.password}
            minLength="8"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Remember me"
            onChange={handleChange}
            name="RememberMe"
          />
        </Form.Group>
        <Button
          type="submit"
          style={{
            backgroundColor: "#c08567"
          }}
          className="border-0"
        >
          Submit
        </Button>
        <Form.Text className="text-muted d-flex justify-content-between">
          <p>
            Not a member?.
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </p>
          <Link href="/forgetPass">
            <a>Forget Password</a>
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
}
