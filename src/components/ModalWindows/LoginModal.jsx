import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { ACTIONS } from "../../redux/constants";
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import "./modalwindows.scss";
export const Registration = ({}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const state = useSelector(i => i.mainReducer)
  const dispatch = useDispatch();

  const handleInputEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleInputPassword = (event) => {
    setPassword(event.target.value)
  }

  const submitData = () => {
    dispatch({type: ACTIONS.LOGIN, email, password} )
  }
  useEffect(() => {
    if(state.state?.user === "Пользователь не найден."){
      alert("Пользователь не найден.")
    }else
    if(state.state?.user === "Неверный пароль."){
      alert("Неверный пароль.")
    }else if (state.state?.user){
      navigate('/user-page')
    }

  },[state])

  return (
    <Form variant="dark">
      <Form.Group onChange={handleInputEmail} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group onChange={handleInputPassword} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button onClick={submitData} variant="dark">Submit</Button>
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
        onClick={() => navigate("/home-page")}
        variant="white"
        className="button-back"
      >
        &larr; Back
      </Button>
    </div>
  );
};