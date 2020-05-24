import {
  Container,
  Card,
  Carousel,
  Image,
  Button,
} from "react-bootstrap";
import Modal from "./Modal";
import GameModal from "./GameModal";
import style from "../styles/Games.module.scss";
function GamePageCard(props) {
  const CarouselItems = props.data.card.images.map((image,index) => {
    return (
      <Carousel.Item key={index}>
        <img className={`d-block ${style.sliderImg}`} src={image} alt="First slide"/>
      </Carousel.Item>
    );
  });
  return (
    <Container className={`${style.gameCardContainer} justify-content-md-center`}>
      <Card className={style.gameCard}>
        <Carousel
          indicators={false}
          prevIcon={false}
          nextIcon={false}
          controls={false}
          interval="2500"
        >
          {CarouselItems}
        </Carousel>

        <Card.ImgOverlay className={style.gamePageOverlay}>
        <Image
          src={props.data.card.logo}
          alt="AvatarPhoto"
          className={style.logoimage}
          roundedCircle
        />
          <h2>{props.data.card.title}</h2>
          <Card.Text style={{maxWidth:"1000px"}}>
            {props.data.card.description}
          </Card.Text>
          <Modal
            buttonText={"More..."}
            styling={{
                  height: "25px",
                  width: "75px",
                  borderRadius: "12px",
                  textAlign: "center",
                  padding: "0",
                  fontSize: "14px",
                  margin: "-10px 0 50px 0",
                  backgroundColor:" #17a2b8"
            }}>
            <GameModal data={props.data.modal}/>
          </Modal>
              <Button variant="info" className={style.playBtn}>Play Store</Button>
              <Button variant="info" className={style.iosBtn}>App store</Button>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default GamePageCard;
