import {useState} from 'react';
import {useRouter} from "next/router";
import { Button, Form, Container } from "react-bootstrap";
import style from "../styles/welcome.module.scss";

const ContactFormWelPage = () => {
  const Router = useRouter();
  const [state, setState] = useState({
    name:"",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    switch(e.target.name){
      case "name":
        setState({
          ...state,
          name: e.target.value
        })
        break;
      case "email":
        setState({
          ...state,
          email: e.target.value
        })
        break;
      case "message":
        setState({
          ...state,
          message: e.target.value
        })
        break;
    }

  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const url = "https://web.metatech.games/contact-us";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sender_name: state.name,
          email: state.email,
          message: state.message
        })
      });
      if ((await response.status) === 200) {
        setState({
          name:"",
          email: "",
          message: ""
        })
        alert("Thank you, your massage has been sent")
      } else {
        throw new Error("message not sent")
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container className={style.ContactForm}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId={style.formBasicCheckbox}>
          <Form.Control type="text" placeholder="Name" required onChange={handleChange} name="name" value={state.name} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required onChange={handleChange} name="email"  value={state.email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1" >
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="8" placeholder="Type something" required onChange={handleChange} name="message" value={state.message} />
        </Form.Group>
        <Button
          type="submit"
          style={{
            backgroundColor: "#c08567"
          }}
          className="border-0"
        >
          Send
        </Button>
      </Form>
    </Container>
  );
};
export default ContactFormWelPage;
