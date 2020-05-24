import { useState, useEffect, useContext } from "react";
import Error from "next/error";
import { AuthContext } from "../context/AuthContext";
import { Dropdown, Image, Form, Nav } from "react-bootstrap";
import Link from "next/link";
import SignInForm from "./SigninForm";
import SignupForm from "./SignupForm";
import Modal from "./Modal";
import {useRouter} from "next/router";

const NavWithAuth = Component => {
  // hoc => function that returns a component
 
  return props => {
    const [state, setState] = useState(0);
    const { isAuthenticated, user, logout } = useContext(AuthContext);

    useEffect(() => {
      if (isAuthenticated === null) {
        setState(0)
      } else if (isAuthenticated) {
        setState(1)
      } else {
        setState(-1)
      }
    }, [isAuthenticated])

    const Router = useRouter();
    const loggingOut = (e) => {
        e.preventDefault();
        logout();
        Router.push("/")
      }

    const userDropDown = (
      <Dropdown>
        <Dropdown.Toggle
          as={Nav.Link}
          className="small text-light"
          id="dropdown-custom-components"
        >
          <Image
            className="mr-1 img-profile"
            roundedCircle
            style={{ width: "1.9rem", height: "1.9rem" }}
            src={user.image}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link href={`/profile`}>
            <p style={{ cursor: "pointer", padding: "1rem" }}>{user.name}</p>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4" onClick={loggingOut}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );

    const loginForm = (
      <Form inline>
        <Modal buttonText={"SignIn"} styling={{ backgroundColor: "#c08567" }}>
          <SignInForm />
        </Modal>
        <Modal buttonText={"SignUp"} styling={{ backgroundColor: "#c08567" }}>
          <SignupForm />
        </Modal>
      </Form>
    );

    if (state === 0) return null;
    if (state === 1) return <Component {...props} authPart={userDropDown} /> ;
    if (state === -1) return  <Component {...props} authPart={loginForm} />;
  };
};

export default NavWithAuth;

