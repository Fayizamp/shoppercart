import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Login() {
  const [validated, SetValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit= (event)=>{

    event.preventDefault();
    const form =event.currentTarget;

    if (form.checkValidity() === false){
     
      event.stopPropagation();
    }
    
    // const emailValid = email.trim().length > 0;
    // const passwordValid = password.trim().length > 0;

    // if (!form.checkValidity() || !emailValid || !passwordValid) {
    //   event.stopPropagation();
    // }
    
    else{
      const formData ={
        email,
        password

      }
      console.log(formData);
      
    }
    SetValidated(true);
    setEmail(true);
    setPassword(true);


  }
  return (
    <Container>
      <Row>
        <Col>
          <div className='d-flex justify-content-center mt-5 mb-5'>
         <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            
          />
          <Form.Control.Feedback type='invalid'>please enter your name</Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      </Form>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your email"
            
          />
          <Form.Control.Feedback type='invalid'>please enter email</Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      </Form>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your password"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>please enter password</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" className="mt-2">Login</Button>
      </Form>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
     </Form>
     <div className='mt-12'>
      <Link to={'/register'}>If don't have an account,Register now.</Link>
     </div>
      
      
    </div>
    </Col>
    </Row>
    </Container>
  )
}

export default Login