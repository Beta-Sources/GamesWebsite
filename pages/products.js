import { Container, Jumbotron } from "react-bootstrap";
import WelcomeNav from "../components/welcomeNav";
import Footer from "../components/Footer";
import GamePageCard from "../components/GamePageCard";
import style from "../styles/Games.module.scss";

const cryptoRivia = {
  modal: {
    description:
      "FORTNITE is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae pretium dolor. Aliquam eleifend purus at euismod suscipit. Donec facilisis faucibus odio, sit amet malesuada metus interdum nec. Sed gravida molestie iaculis. Sed eget sapien vitae diam auctor eleifend. Pellentesque porttitor augue justo, sed fringilla elit tincidunt et. Morbi posuere ut nulla sit amet maximus. Suspendisse condimentum ipsum ac tellus luctus, a commodo metus tincidunt. Nunc ac odio sit amet quam pulvinar ullamcorper. Curabitur a sapien a sem pharetra lobortis vel at elit. Cras placerat gravida arcu, non pharetra felis lacinia ac. Sed iaculis id nisi quis venenatis. Nam quis velit nibh. Nullam turpis libero, fringilla eu enim in, elementum consectetur est..",
    images: [
      "/assets/Games/gamepage1.jpeg",
      "/assets/Games/gamepage2.jpeg",
      "/assets/Games/gamepage3.jpeg"
    ]
  },
  card: {
    logo: "/assets/Games/gamepage7.jpeg",
    images: [
      "/assets/Games/gamepage1.jpeg",
      "/assets/Games/gamepage2.jpeg",
      "/assets/Games/gamepage3.jpeg"
    ],
    title: "FORTNITE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae pretium dolor. Aliquam eleifend purus at euismod suscipit. Donec facilisis faucibus odio, sit amet malesuada metus interdum nec. "
  }
};

const carabia = {
  modal: {
    description:
      "League of Legends Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae pretium dolor. Aliquam eleifend purus at euismod suscipit. Donec facilisis faucibus odio, sit amet malesuada metus interdum nec. Sed gravida molestie iaculis. Sed eget sapien vitae diam auctor eleifend. Pellentesque porttitor augue justo, sed fringilla elit tincidunt et. Morbi posuere ut nulla sit amet maximus. Suspendisse condimentum ipsum ac tellus luctus, a commodo metus tincidunt. Nunc ac odio sit amet quam pulvinar ullamcorper. Curabitur a sapien a sem pharetra lobortis vel at elit. Cras placerat gravida arcu, non pharetra felis lacinia ac. Sed iaculis id nisi quis venenatis. Nam quis velit nibh. Nullam turpis libero, fringilla eu enim in, elementum consectetur est.",
    images: [
      "/assets/Games/gamepage7.jpeg",
      "/assets/Games/gamepage5.jpeg",
      "/assets/Games/gamepage6.jpeg"
    ]
  },
  card: {
    logo: "/assets/Games/gamepage7.jpeg",
    images: [
      "/assets/Games/gamepage7.jpeg",
      "/assets/Games/gamepage5.jpeg",
      "/assets/Games/gamepage6.jpeg"
    ],
    title: "League of Legends",
    description:
      "League of Legends isLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae pretium dolor. Aliquam eleifend purus at euismod suscipit. Donec facilisis faucibus odio, sit amet malesuada.."
  }
};

const Games = () => {
  return (
    <Container className={style.gamePage} fluid>
      <WelcomeNav />
      <Jumbotron className="coverGamesPage">
        <h1 className="gamesTitle">Parties Project for Learning Purposes</h1>
      </Jumbotron>
      <div style={{ margin: "4rem auto 1rem auto" }}>
        <GamePageCard data={cryptoRivia} />
      </div>
      <div style={{ margin: "1rem auto 4rem auto" }}>
        <GamePageCard data={carabia} />
      </div>
      <Footer />

      <style global jsx>{`
        .coverGamesPage {
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
          .coverGamesPage {
            background-image: url("/assets/Games/cover.jpeg");
          }
        }
        .gamesTitle{
          margin-top: 2rem;
        }
        @media (max-width: 341px){
          .gamesTitle{
            font-size: 1.8rem;
          }  
      `}</style>
    </Container>
  );
};
export default Games;
