import { Container, Jumbotron } from "react-bootstrap";
import NavBar from "../components/welcomeNav";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";
import style from "../styles/Contact.module.scss";


const Contact = () => {
  return (
    <Container className={style.contactPage} fluid>
      <NavBar />
      <Jumbotron className="coverGamesPage">
        <h1 className="contactTitle"> Parties Project for Learning Purposes </h1>
      </Jumbotron>
      <Tabs />
      <Footer />
      <style global jsx>{`
      .coverGamesPage{
       background-image: url("/assets/Games/cover.jpeg");
       background-size: cover;
       height: 400px;
       color: #fff;
       margin-bottom: 15px;
       background-position: center;
       background-repeat: no-repeat;
       text-align: center;
      }
      @media (max-width: 600px) {
        .coverGamesPage{
          background-image: url("/assets/Games/cover.jpeg");
        }
      }  
      .contactTitle{
        margin-top: 2rem;
      }
      @media (max-width: 341px){
        .contactTitle{
          font-size: 1.8rem;
        }   
      `}</style>
    </Container>
  );
};

export default Contact;
