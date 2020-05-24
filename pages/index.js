import Head from "next/head";
import { Container } from "react-bootstrap";
import WelcomeCover from "../components/welcomecover";
import style from "../styles/welcome.module.scss";
import WelcomeNav from "../components/welcomeNav";
const Home = () => (
  <Container className={style.welPage} fluid>
    <Head>
      <title>Games</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <WelcomeNav />
    <WelcomeCover />
  </Container>
);

export default Home;
