import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import style from "../styles/welcome.module.scss";
import ContactFormWelPage from "./ContactForm-welPage";
const ContactForm = () => {
  return (
    <Container style={{ margin: "10rem auto 5rem auto" }}>
      <Row className={style.contactFormSection}>
        <Col lg={6}></Col>
        <Col lg={6}>
          <ContactFormWelPage />
        </Col>
      </Row>
    </Container>
  );
};
export default ContactForm;
