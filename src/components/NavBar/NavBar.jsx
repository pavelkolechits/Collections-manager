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
import './navbar.scss';
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constants";


export const NavBar = () => {
  const dispatch = useDispatch()
  const h = () => {
    dispatch({type: ACTIONS.GET_USERS})
  }
  const navigate = useNavigate();
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button onClick={h} className="nav-button" variant="outline-success">Home</Button>
            <Button
            className="nav-button"
              onClick={() => navigate("/login")}
              variant="outline-success"
            >
              Log In
            </Button>
            <Button className="nav-button" onClick={() => navigate("/")} variant="outline-success">
              Home
            </Button>
            <Button className="nav-button"
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
