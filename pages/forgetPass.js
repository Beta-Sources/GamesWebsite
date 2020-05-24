import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Form, Container } from "react-bootstrap";


export default function forgetPass() {
  const Router = useRouter();
  const [emailState, setEmailState] = useState({
    email: ""
  });
  const [codeState, setCodeState] = useState({
    code: ""
  });
  const [newPassState, setNewPassState] = useState({
    new_password: "",
    confirm_password: ""
  });
  const [email, setEmail] = useState({
    email: ""
  });
  const [render, setRender] = useState(1);

  const handleChange = e => {
    switch (e.target.id) {
      case "email":
        setEmailState({
          email: e.target.value
        });
        break;
      case "code":
        setCodeState({
          code: e.target.value
        });
        break;
      case "newPassword":
        setNewPassState({
          ...newPassState,
          new_password: e.target.value
        });
        break;
      case "confirmPassword":
        setNewPassState({
          ...newPassState,
          confirm_password: e.target.value
        });
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let url = "";
    try {
      switch (e.target.id) {
        case "emailForm":
          url = "https://web.metatech.games/send-code";
          const response1 = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            // state management
            body: JSON.stringify(emailState)
          });
          if (response1.status === 200) {
            // change the rendered form
            console.log(await response1.json());
            setRender(2);
          } else {
            throw new Error("email Form error");
          }
          break;
        case "codeForm":
          url = "https://web.metatech.games/check-code";
          const response2 = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              ...codeState,
              email: emailState.email
            })
          });

          if (response2.status === 201) {
            setRender(3);
          } else {
            throw new Error("codeForm");
          }
          break;
        case "newPassForm":
          url = "https://web.metatech.games/update-password";
          const response3 = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              ...newPassState,
              email: emailState.email
            })
          });
          if ((await response3.status) === 201) {
            Router.push("/signin");
          } else {
            throw new Error("new pass form");
          }
          break;
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const emailForm = (
    <Form
      style={{
        maxWidth: "25rem",
        padding: "1rem",
        border: "lightgrey 0.5px solid",
        borderRadius: "15px",
        margin: "auto",
        marginTop: "200px"
      }}
      id="emailForm"
      className=" row justify-content-center"
      onSubmit={handleSubmit}
    >
      <h1 style={{ marginTop: "35px" }}>Forget Password</h1>
      <Form.Text
        className="text-muted"
        style={{ marginTop: "40px", marginBottom: "20px" }}
      >
        Enter your Email address to reset your password
      </Form.Text>

      <Form.Control
        type="email"
        placeholder="Enter email"
        required
        onChange={handleChange}
        value={emailState.email}
        id="email"
      />
      <Button
        variant="success"
        style={{
          width: "150px",
          borderRadius: "50px",
          marginTop: "60px",
          marginBottom: "35px",
          backgroundColor: "#c08567"
        }}
        className="align-content-center border-0"
        type="submit"
      >
        Reset
      </Button>
    </Form>
  );

  const codeForm = (
    <Form
      style={{
        maxWidth: "25rem",
        padding: "1rem",
        border: "lightgrey 0.5px solid",
        borderRadius: "15px",
        margin: "auto",
        marginTop: "200px"
      }}
      id="codeForm"
      className=" row justify-content-center"
      onSubmit={handleSubmit}
    >
      <h1 style={{ marginTop: "35px" }}>VerificationCode</h1>
      <Form.Text
        className="text-muted"
        style={{ marginTop: "40px", marginBottom: "20px" }}
      >
        The recovery code send to your Email, please enter the code
      </Form.Text>
      <Form.Control
        type="text"
        placeholder="Enter your code"
        required
        onChange={handleChange}
        value={codeState.code}
        id="code"
      />
      <Button
        type="submit"
        style={{
          width: "150px",
          borderRadius: "50px",
          marginTop: "60px",
          marginBottom: "35px",
          backgroundColor: "#c08567"
        }}
        className="align-content-center border-0"
      >
        submit
      </Button>
    </Form>
  );

  const newPassForm = (
    <Form
      style={{
        maxWidth: "25rem",
        padding: "1rem",
        border: "lightgrey 0.5px solid",
        borderRadius: "15px",
        margin: "auto",
        marginTop: "200px"
      }}
      id="newPassForm"
      onSubmit={handleSubmit}
    >
      <Form.Text
        className="text-muted"
        style={{ marginTop: "40px", marginBottom: "20px" }}
      >
        The recivery code send to your Email, please enter the code
      </Form.Text>
      <Form.Group>
        <Form.Label>New Pasword</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          minLength="8"
          required
          value={newPassState.new_password}
          onChange={handleChange}
          id="newPassword"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Re-write Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Re-write Password"
          name="repassword"
          minLength="8"
          required
          value={newPassState.confirm_password}
          onChange={handleChange}
          id="confirmPassword"
        />
      </Form.Group>
      <div className="row justify-content-center">
        <Button
          type="submit"
          style={{
            width: "150px",
            height: "40px",
            borderRadius: "50px",
            marginTop: "60px",
            marginBottom: "35px",
            backgroundColor: "#c08567"
          }}
          className="border-0"
        >
          Done
        </Button>
      </div>
    </Form>
  );

  return (
    <Container className="justify-content-center">
      {render === 1 ? emailForm : render === 2 ? codeForm : newPassForm}
    </Container>
  );
}
