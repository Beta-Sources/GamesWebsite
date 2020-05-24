import React, { useState, useContext } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Container } from "react-bootstrap";
import style from "../styles/SignInUpForm.module.scss";
import Link from "next/link";
import {useRouter} from 'next/router';
import {AuthContext} from "../context/AuthContext";
const Singup = props => {
  const Router = useRouter();
  const {signup} = useContext(AuthContext);
  const [state, setSate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = e => {
    switch (e.target.getAttribute("name")) {
      case "firstName":
        setSate({
          ...state,
          firstName: e.target.value
        });
        break;
      case "lastName":
        setSate({
          ...state,
          lastName: e.target.value
        });
        break;
      case "email":
        setSate({
          ...state,
          email: e.target.value
        });
        break;
      case "password":
        setSate({
          ...state,
          password: e.target.value
        });
        break;
      case "confirmPassword":
        if (e.target.value !== state.password) {
          e.target.classList.add("border-danger");
          setSate({
            ...state,
            confirmPassword: e.target.value
          });
        } else {
          e.target.classList.remove("border-danger");
          setSate({
            ...state,
            confirmPassword: e.target.value
          });
        }
        break;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (state.password === state.confirmPassword){
      signup(state)
    }else {
      alert("passwords don't match!")
    }
  };

  return (
    <Container className={style.signincontainer}>
      <Form className="sign-in" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name "
            name="firstName"
            onChange={handleChange}
            value={state.firstName}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name "
            name="lastName"
            onChange={handleChange}
            value={state.lastName}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={state.email}
            required
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={state.password}
            required
            minLength="8"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordRewrite">
          <Form.Label> confirmPassword</Form.Label>
          <Form.Control
            type="password"
            className=""
            placeholder=" confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            value={state.confirmPassword}
            required
            minLength="8"
          />
        </Form.Group>

        <Button
          type="submit"
          style={{
            backgroundColor: "#c08567"
          }}
          className="border-0"
        >
          Sing Up
        </Button>
        <Form.Text className="text-muted">
          Already a member?.
          <Link href="/signin">
            <a> Sign in </a>
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
};
export default Singup;
