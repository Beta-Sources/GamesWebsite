import { Row, Container, Col, Card, Image } from "react-bootstrap";
import style from "../styles/welcome.module.scss";

const GamesCards = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={12} xs={12} className="justify-content-center d-flex">
          <div
            className={style.mainCardx}
            style={{
              backgroundImage: 'url("/assets/Games/Games.jpeg")',
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            <div className={style.frontCardx}></div>
            <div className={style.backCardx}>
              <Card
                className="gameCardx"
                style={{
                  borderRadius: "25px",
                  position: "relative",
                  height: "100%"
                }}
              >
                <Card.Img
                  variant="top"
                  src="/assets/Games/Games.jpeg"
                  style={{
                    height: "60%",
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px"
                  }}
                />
                <Image
                  src="/assets/Games/Games.jpeg"
                  alt="AvatarPhoto"
                  className="logoimage"
                  roundedCircle
                  style={{
                    position: "absolute",
                    width: "90px",
                    maxHeight: "90px",
                    top: "333px",
                    right: "20px"
                  }}
                />
                <Card.Body
                  className="gamePage-cardBody"
                  style={{
                    textAlign: "left",
                    padding: "20px",
                    paddingTop: "1.5rem"
                  }}
                >
                  <Card.Title>FORTNITE</Card.Title>
                  <Card.Text>
                    FORTNITE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae pretium dolor. Aliquam eleifend purus at euismod suscipit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} xs={12} className="justify-content-center d-flex">
          <div
            className={style.mainCardx}
            style={{
              backgroundImage: 'url("/assets/Games/game.jpeg")',
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            <div className={style.frontCardx}></div>
            <div className={style.backCardx}>
              <Card
                className="gameCardx"
                style={{
                  borderRadius: "25px",
                  position: "relative",
                  height: "100%"
                }}
              >
                <Card.Img
                  variant="top"
                  src="/assets/Games/game.jpeg"
                  style={{
                    height: "60%",
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px"
                  }}
                />
                <Image
                  src="/assets/Games/game.jpeg"
                  alt="AvatarPhoto"
                  className="logoimage"
                  roundedCircle
                  style={{
                    position: "absolute",
                    width: "90px",
                    maxHeight: "90px",
                    top: "333px",
                    right: "20px"
                  }}
                />
                <Card.Body
                  className="gamePage-cardBody"
                  style={{
                    textAlign: "left",
                    padding: "20px",
                    paddingTop: "1.5rem"
                  }}
                >
                  <Card.Title>League of Legends</Card.Title>
                  <Card.Text>
                    League of Legends is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae pretium dolor. Aliquam eleifend purus at euismod suscipit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default GamesCards;
