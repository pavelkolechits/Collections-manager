import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./modalwindows.scss";
import { useDispatch , useSelector} from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { useState, useEffect } from "react";


export const Registration = ({}) => {
  const state = useSelector(i => i.mainReducer)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const handleInputName = (event) => {
    setName(event.target.value)
  }
  const handleInputEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleInputPassword = (event) => {
    setPassword(event.target.value)
  }

  const submitData = () => {
    dispatch({type: ACTIONS.REGISTRATION, name, email, password})
  }
  useEffect(() => {
    if (state.state?.user){
      navigate('/user-page')
    }
  },[state])

  return (
    <Form variant="dark">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter your name</Form.Label>
        <Form.Control value={name} onChange={handleInputName} type="text" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={handleInputEmail} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={handleInputPassword} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button onClick={submitData} variant="dark">Submit</Button>
    </Form>
  );
};

export const RegistrationModal = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="registration-form">
      <div className="registration-form-wrap">
        <Registration />
      </div>
      <Button
        onClick={() => navigate("/home-page")}
        variant="white"
        className="button-back"
      >
        &larr; Back
      </Button>
    </div>
  );
};
