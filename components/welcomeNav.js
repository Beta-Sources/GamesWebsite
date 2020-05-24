
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import Link from "next/link";
import NavWithAuth from "./NavWithAuth";

const WelcomeNav = (props) => {
  return (
    <Navbar
      expand="md"
      variant="dark"
      fixed="top"
      collapseOnSelect
      style={{
        backgroundColor: "#220501",
        transition: "background-color 2s ease-out"
      }}
    >
      <Container>
        <Navbar.Brand style={{ color: "#fff" }}>
          <Link href="/">
          <Image
            src="/assets/top-leader/flipcard.jpeg"
            width="45"
            alt="siteLogo"
            className="d-inline-block align-middle mr-2"
            style={{cursor: "pointer"}}
          />
          </Link>
          <Link href="/">
          <span id="brandName" style={{cursor: "pointer",fontWeight: "900"}}>Games</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ color: "#fff" }}>
              <Link href="/products" ><span style={{fontWeight: "600"}}>Products</span></Link>
            </Nav.Link>
             <Nav.Link  style={{ color: "#fff" }}>
              <Link href="/blog"  ><span style={{fontWeight: "600"}}>Blog</span></Link>
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }}>
            <Link href="/about" ><span style={{fontWeight: "600"}}>About</span></Link>
            </Nav.Link>
          </Nav>
          {props.authPart}
        </Navbar.Collapse>
      </Container>
      <style jsx>{`
      @media (max-width: 600px) {
        #brandName{
          display: none;
        }
      }
      `}</style>
    </Navbar>
  );
};
export default NavWithAuth(WelcomeNav);
