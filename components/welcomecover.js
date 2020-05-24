import { useEffect } from "react";
import OurVision from "./Our_vision";
import Footer from "./Footer";
import GamesCards from "./GamesCards";
import ContactForm from "./ContactForm";

const Welcomecover = () => {
  useEffect(() => {
    window.addEventListener("scroll", function(event) {
      let top = this.pageYOffset;

      let layers = document.getElementsByClassName("parallax");
      let layer, speed;
      for (let i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute("data-speed");
        let yPos = -((top * speed) / 100);
        layer.setAttribute(
          "style",
          "transform: translate3d(0px, " + yPos + "px, 0px)"
        );
      }
    });
  });

  return (
    <div>
      <div className="keyart" id="nonparallax"></div>
      <div className="keyart" id="parallax">
        <div
          className="keyart_layer parallax"
          id="keyart-0"
          data-speed="2"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-1"
          data-speed="5"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-2"
          data-speed="11"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-3"
          data-speed="16"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-4"
          data-speed="26"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-5"
          data-speed="35"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-6"
          data-speed="49"
        ></div>
        <div className="keyart_layer" id="keyart-scrim"></div>
        <div
          className="keyart_layer parallax"
          id="keyart-7"
          data-speed="63"
        ></div>
        <div className="keyart_layer" id="keyart-8" data-speed="100"></div>
        <div className="keyart_layer" id="keyart-9" data-speed="100"></div>
      </div>
      <div id="maincontain">
        <div id="main">
          <div>
            <div style={{ margin: "7rem auto 0 auto" }}>
              <OurVision />
            </div>
            <div style={{ margin: "10rem auto 0 auto" }}>
              <GamesCards />
            </div>
            <ContactForm />
            <Footer />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .keyart,
          .keyart_layer {
            height: 950px;

            left: 0;
          }

          #parallax {
            display: none;
          }
          #nonparallax {
            display: block;
          }

          #nonparallax {
            background-image: url("../assets/parallex/keyart-mobile.jpg");
            background-position: center;
            background-repeat: no-repeat;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }

          .keyart {
            position: relative;
            z-index: 10;
          }

          .keyart_layer {
            background-position: bottom center;

            background-repeat: no-repeat;
            width: 100%;
            position: absolute;
            background-size: cover;
            height: 1038px;
          }
          .keyart_layer.parallax {
            position: fixed;
          }
          #keyart-1 {
            background-image: url("../assets/parallex/parallax0.png");
          }
          #keyart-2 {
            background-image: url("../assets/parallex/parallax1.png");
          }
          #keyart-3 {
            background-image: url("../assets/parallex/parallax2.png");
          }
          #keyart-4 {
            background-image: url("../assets/parallex/parallax3.png");
          }

          #keyart-5 {
            background-image: url("../assets/parallex/parallax4.png");
          }
          #keyart-6 {
            background-image: url("../assets/parallex/parallax5.png");
          }
          #keyart-7 {
            background-image: url("../assets/parallex/parallax6.png");
          }
          #keyart-8 {
            background-image: url("../assets/parallex/parallax7.png");
          }
          #keyart-9 {
            background-image: url("../assets/parallex/parallax8@2x.png");
          }
         
          
          #keyart-scrim {
            opacity: 0;
          }
          #main {
            min-width: 100%;
            margin-left: auto;
            margin-right: auto;
            z-index: 99;
            position: relative;
            background-color: #220501;
          }
          #maincontain {
            background-color: #220501;
            position: absolute;
            z-index: 98;
            width: 100%;
            overflow: hidden;
          }

          @media (min-width: 601px) {
            #nonparallax {
              display: none;
            }
            #parallax {
              display: block;
            }
          }
          @media (max-width: 600px) {
            #parallax {
              display: none;
            }

            #main {
              padding-top: 70px;
            }

            .section.copyright p {
              font-size: 12px;
              line-height: 20px;
              letter-spacing: 1px;
            }
            .section.companylinks .companies li h1 {
              margin: 20px;
            }
          }

          @media only screen and (max-device-width: 450px) {
            .section.buy h2 {
              font-size: 22px;
              letter-spacing: 3px;
              font-weight: 700;
              line-height: 28px;
            }
            .section.buy h2.banner span {
              padding-top: 7px;
              padding-bottom: 7px;
            }
            .withxbone .section.buy h2.banner span {
              padding-top: 6px;
              padding-bottom: 8px;
            }

            .columntext p {
              font-size: 23px;
            }

            .section.pressquote.big h2 {
              font-size: 28px;
              letter-spacing: 1px;
            }
            .section.pressquote.big h3 {
              font-size: 16px;
            }

            .section.screenshots .thumbnails li {
              opacity: 1;
            }

            .supportlinks.smalllinks li h4 {
              letter-spacing: 1px;
            }

            .section.copyright {
              margin-top: 60px;
            }
            .section.copyright p {
              font-size: 10px;
              line-height: 16px;
              letter-spacing: 1px;
            }
            ul.awards {
              display: none;
            }
            .keyart,
            .keyart_layer {
              height: 550px;
            }

            .keyart_layer {
              position: absolute;
              background-size: auto 600px;
            }
          }
        `}
      </style>
    </div>
  );
};
export default Welcomecover;
