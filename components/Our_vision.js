import { Container } from "react-bootstrap";
import Style from "../styles/welcome.module.scss";

const OurVision = () => {
  return (
    <Container
      className={`${Style.ourVision} text-center d-flex flex-column justify-content-center align-items-center`}
    >
      <h1>Our Vision</h1>
      <p style={{ fontSize: "1rem", maxWidth: "900px" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae pretium dolor. Aliquam eleifend purus at euismod suscipit. Donec facilisis faucibus odio, sit amet malesuada metus interdum nec. Sed gravida molestie iaculis. Sed eget sapien vitae diam auctor eleifend. Pellentesque porttitor augue justo, sed fringilla elit tincidunt et. 
      </p>
    </Container>
  );
};

export default OurVision;
