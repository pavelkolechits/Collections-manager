import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./registration.scss";
export const Registration = ({}) => {
  return (
    <Form variant="dark">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="dark">Submit</Button>
    </Form>
  );
};

export const LoginModal = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="registration-form">
      <div className="registration-form-wrap">
        <Registration />
      </div>
      <Button
        onClick={() => navigate("/")}
        variant="dark"
        className="button-back"
      >
        &larr; Back
      </Button>
    </div>
  );
};