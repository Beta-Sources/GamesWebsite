import React from "react";
import { Container, Card, Tabs, Tab } from "react-bootstrap";
import style from "../styles/Contact.module.scss";


const arr=[{
  img:"/assets/Games/gamepage1.jpeg",
  title:"New game",
  body:"Some quick example text to build on the card title and make up thebulk of the card's content.",
  status:"tab3"
},
{
  img:"/assets/Games/gamepage1.jpeg",
  title:"New artical",
  body:"Some quick example text to build on the card title and make up thebulk of the card's content.",
  status:"tab2"
},
{
  img:"/assets/Games/gamepage1.jpeg",
  title:"Welcome",
  body:"Some quick example text to build on the card title and make up thebulk of the card's content.",
  status:"tab3"
}]
let Allcards = (
  <div
    className={`${style.cardsContainer} justify-content-between`}
  >
    {arr.map(objs=>{return(
      <Card className={style.productCards}>
      <Card.Img variant="top" src={objs.img} />
      <Card.Body>
        <Card.Title>{objs.title}</Card.Title>
        <Card.Text>
          {objs.body}
        </Card.Text>
      </Card.Body>
    </Card>

    )})}
  </div>
);
let Profile = (
  <div
  className={`${style.cardsContainer} justify-content-between`}
  >
       
       {arr.map(objs =>{
            if(objs.status === "tab2"){
              return <Card className={style.productCards}>
                <Card.Img variant="top" src={objs.img} />
                <Card.Body>
                  <Card.Title>{objs.title}</Card.Title>
                  <Card.Text>
                    {objs.body}
                  </Card.Text>
                </Card.Body>
              </Card>
             }
    })}
  </div>
);

let Contact = (
  <div
  className={`${style.cardsContainer} justify-content-between`}
  >
       
       {arr.map(objs =>{
            if(objs.status === "tab3"){
              return <Card className={style.productCards}>
                <Card.Img variant="top" src={objs.img} />
                <Card.Body>
                  <Card.Title>{objs.title}</Card.Title>
                  <Card.Text>
                    {objs.body}
                  </Card.Text>
                </Card.Body>
              </Card>
             }
    })}
  </div>
);
const OurOffice = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        style={{ marginBottom: "25px" }}
      >
        <Tab eventKey="home" title="All">
          {/* <ProudctItems/> */}
          {Allcards}
          {/* {Profile} */}
        </Tab>
        <Tab eventKey="profile" title="Profile">
        {Profile}
        </Tab>
        <Tab eventKey="contact" title="Contact">
          {Contact}
        </Tab>
      </Tabs>
    </Container>
  );
};
export default OurOffice;
