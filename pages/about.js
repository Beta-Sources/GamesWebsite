import { Container, Jumbotron  } from "react-bootstrap";
import NavBar from "../components/welcomeNav";
import style from "../styles/About.module.scss";
import AboutCards from "../components/Aboutpage-cards";
import OurVision from "../components/Our_vision";
import Footer from "../components/Footer";
import OurTeamContactPage from "../components/OurTeam-contactPage"
const About = () => {

  return (
    <Container className={style.aboutPage} fluid>
      <NavBar />
      <Jumbotron className="coverGamesPage">
        <h1 className="aboutTitle"> Parties Project for Learning Purposes </h1>
      </Jumbotron>
      {/* <OurVision /> */}
      <AboutCards/>
      <OurTeamContactPage/>
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
      .aboutTitle{
        margin-top: 2rem;
      }
      @media (max-width: 341px){
        .aboutTitle{
          font-size: 1.8rem;
        }
      }     
      `}</style>
    </Container>
  );
};
export default About;
