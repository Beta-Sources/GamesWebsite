import { Row, Carousel } from "react-bootstrap";
const GameModal = props => {
  // console.log(props.data);

  const CarouselItems = props.data.images.map((image, index) => {
    return (
      <Carousel.Item key={index}>
        <img className="d-block w-100" src={image} alt="First slide" />
      </Carousel.Item>
    );
  });

  return (
    <div>
      <Carousel
        interval="2500"
      >
        {CarouselItems}
      </Carousel>

      <Row>
        <p style={{ padding: "40px" }}>{props.data.description}</p>
      </Row>
    </div>
  );
};
export default GameModal;
