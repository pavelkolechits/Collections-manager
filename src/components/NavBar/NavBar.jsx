import {
  Navbar,
  Nav,
  Form,
  Button,
  Container,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { useEffect } from "react";

export const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    navigate("/home-page");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    navigate("/home-page");
  }, []);
  return (
    <Navbar
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1000",
        width: "100vw",
      }}
      variant="dark"
      bg="dark"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button
              onClick={() => navigate("/home-page")}
              className="nav-button"
              variant="outline-success"
            >
              Home
            </Button>
            <Button
              className="nav-button"
              onClick={() => navigate("/login")}
              variant="outline-success"
            >
              Log In
            </Button>
            <Button
              className="nav-button"
              onClick={logout}
              variant="outline-success"
            >
              Log Out
            </Button>
            <Button
              className="nav-button"
              onClick={() => navigate("/")}
              variant="outline-success"
            >
              Admin
            </Button>
            <Button
              className="nav-button"
              onClick={() => navigate("/registration")}
              variant="outline-success"
            >
              Registration
            </Button>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
