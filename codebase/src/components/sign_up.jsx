// SignUp.js

import React from 'react';
import './Styles/signUp.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

function SignUp() {
  return (
    <div className="signup">
      <Row>
        {/* Column for some text */}
        <Col md={6}>
          <p>
            Additional information or text can be placed here to provide more details about the sign-up process.
          </p>
        </Col>
        {/* Column for the form */}
        <Col md={6}>
          <h2>Sign Up</h2>

          <p>
            Create an account to stay updated and engage with our community.
          </p>

          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>

        
      </Row>
    </div>
  );
}

export default SignUp;
