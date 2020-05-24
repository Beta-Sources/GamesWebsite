import fetch from "isomorphic-unfetch";
import {
  Form,
  Figure,
  Container,
  Image,
  ListGroup,
  Jumbotron,
  Button
} from "react-bootstrap";
import WelcomeNav from "../components/welcomeNav";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState, useEffect } from "react";
import WithAuth from "../components/withAuth";

const Profile = props => {
  const { user: userContext } = useContext(AuthContext);
  const [user, setUser] = useState({ ...userContext });

  useEffect(() => {
    setUser({
      ...userContext
    });
  }, [userContext]);

  const handleChange = e => {
    // console.log(e.target.value);
  };
  return (
    <div>
      <WelcomeNav />
      <Container style={{ marginTop: "5rem" }}>
        <Jumbotron>
          <div className="profileHeader">
            <div className="profileImageDev">
              <Image src={user.image} rounded width="180px" height="180px" />
            </div>
            <div className="profileDetailsDev">
              <ListGroup variant="flush">
                <ListGroup.Item className=" rounded m-1">
                  {user.name}
                </ListGroup.Item>
                <ListGroup.Item className=" rounded m-1">
                  {user.email}
                </ListGroup.Item>
                {/* <Form>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                />
                </Form> */}
              </ListGroup>
            </div>
          </div>
        </Jumbotron>
        <h3 className="text-secondary bg-light p-3 rounded">Connected Games</h3>
         <div className="profileCards">
          <Figure>
            <Figure.Image
              style={{ width: "350px", height: "400px" }}
              alt="game Image"
              className="figIamge"
              src="/assets/Games/carabia2.jpg"
              rounded
            />
            <Figure.Caption>Carabia</Figure.Caption>
          </Figure>

          <Figure>
            <Figure.Image
              style={{ width: "350px", height: "400px" }}
              alt="game Image"
              className="figImage"
              src="/assets/Games/card.jpg"
              rounded
            />
            <Figure.Caption>Crypto Rivaia</Figure.Caption>
          </Figure>
        </div> 
        <style jsx>{`
          .profileHeader {
            display: flex;
            padding-left: 5rem;
          }
          .profileImageDev {
            display: flex;
            margin-right: 5rem;
          }
          .profileDetailsDev {
            display: flex;
            align-items: center;
          }
          .profileCards {
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          @media (max-width: 991px) {
            .profileCards {
              justify-content: space-around;
            }
          }
          @media (max-width: 768px) {
            .profileHeader {
              padding-left: 1rem !important;
            }
            .profileImageDev {
              margin-right: 1rem;
            }
          }
          @media (max-width: 768px) {
            .profileHeader {
              flex-direction: column;
              align-items: center;
            }
            .profileImageDev {
              margin-right: 0;
              margin-bottom: 1rem;
            }
          }
        `}</style>
      </Container>
      <Footer />
    </div>
  );
};

export default WithAuth(Profile);
