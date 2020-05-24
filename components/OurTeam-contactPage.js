import { Container, Card, Image } from "react-bootstrap";
import { FaTwitterSquare } from "react-icons/fa";
import style from "../styles/About.module.scss";
import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      arrows: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false
          }
        }
      ]
    };
    return (
      <Container className={style.sliderContainer}>
        <h2 className="text-center mb-3">Our team</h2>
        <Slider {...settings} className={style.slider}>
          <Card
            style={{
              width: "33rem"
            }}
            className="border-0"
          >
            {/* <div className={style.teamCards1}></div> */}
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "20rem"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div>
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
                  </Card.Subtitle>
                </div>
                <img
                  className="d-block "
                  src="/assets/small-screen-cards/7.jpeg"
                  alt="First slide"
                  style={{
                    height: "100px",
                    width: "100px",
                    alignContent: "center",
                    borderRadius: "50%"
                  }}
                />
              </div>
              <div>
                <p>
                  <q id="b">
                    bottom row: Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                  </q>
                </p>
                <FaTwitterSquare size="35" style={{ marginLeft: "2rem" }} />
              </div>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "33rem"
            }}
            className="border-0"
          >
            {/* <div className={style.teamCards2}></div> */}
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "20rem"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div>
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
                  </Card.Subtitle>
                </div>
                <img
                  className="d-block "
                  src="/assets/small-screen-cards/2.jpeg"
                  alt="First slide"
                  style={{
                    height: "100px",
                    width: "100px",
                    alignContent: "center",
                    borderRadius: "50%"
                  }}
                />
              </div>
              <div>
                <p>
                  <q id="b">
                    bottom row: Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                  </q>
                </p>
                <FaTwitterSquare size="35" style={{ marginLeft: "2rem" }} />
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "33rem" }} className="border-0">
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "20rem"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div>
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
                  </Card.Subtitle>
                </div>
                <img
                  className="d-block "
                  src="/assets/small-screen-cards/6.jpeg"
                  alt="First slide"
                  style={{
                    height: "100px",
                    width: "100px",
                    alignContent: "center",
                    borderRadius: "50%"
                  }}
                />
              </div>
              <div>
                <p>
                  <q id="b">
                    bottom row: Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                  </q>
                </p>
                <FaTwitterSquare size="35" style={{ marginLeft: "2rem" }} />
              </div>
            </Card.Body>
          </Card>


          <Card
            style={{
              width: "33rem"
            }}
            className="border-0"
          >
             <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "20rem"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div>
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
                  </Card.Subtitle>
                </div>
                <img
                  className="d-block "
                  src="/assets/small-screen-cards/6.jpeg"
                  alt="First slide"
                  style={{
                    height: "100px",
                    width: "100px",
                    alignContent: "center",
                    borderRadius: "50%"
                  }}
                />
              </div>
              <div>
                <p>
                  <q id="b">
                    bottom row: Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                  </q>
                </p>
                <FaTwitterSquare size="35" style={{ marginLeft: "2rem" }} />
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "33rem"
            }}
            className="border-0"
          >
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "20rem"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div>
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
                  </Card.Subtitle>
                </div>
                <img
                  className="d-block "
                  src="/assets/small-screen-cards/6.jpeg"
                  alt="First slide"
                  style={{
                    height: "100px",
                    width: "100px",
                    alignContent: "center",
                    borderRadius: "50%"
                  }}
                />
              </div>
              <div>
                <p>
                  <q id="b">
                    bottom row: Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                  </q>
                </p>
                <FaTwitterSquare size="35" style={{ marginLeft: "2rem" }} />
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "33rem"
            }}
            className="border-0"
          >
      <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "20rem"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div>
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
                  </Card.Subtitle>
                </div>
                <img
                  className="d-block "
                  src="/assets/small-screen-cards/2.jpeg"
                  alt="First slide"
                  style={{
                    height: "100px",
                    width: "100px",
                    alignContent: "center",
                    borderRadius: "50%"
                  }}
                />
              </div>
              <div>
                <p>
                  <q id="b">
                    bottom row: Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                  </q>
                </p>
                <FaTwitterSquare size="35" style={{ marginLeft: "2rem" }} />
              </div>
            </Card.Body>
          </Card>

        </Slider>
      </Container>
    );
  }
}
