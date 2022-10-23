import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Enter The URL of Your Photo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <p className="text-danger">
          
        </p>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    );
};

export default Register;