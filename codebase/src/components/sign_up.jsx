import React from 'react';
import './Styles/signUp.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

function SignUp() {
  return (
    <div className="signup">
      <Row>
        {/* Column for additional text and/or visuals */}
        <Col md={6} className="signup-info">
          <h3>Welcome to Our Community</h3>
          <p>
            Join our community to stay in the loop with the latest updates, participate in our programs, and connect with like-minded individuals. By signing up, you gain access to exclusive content, resources, and workshops that are designed to empower and inspire. Whether you're a beginner or an experienced tech enthusiast, there's something here for everyone.
          </p>
          <img src="https://thumbs.dreamstime.com/b/community-concept-pictogram-showing-figures-happy-family-84451213.jpg" alt="Community" className="img-fluid" />
        </Col>

        {/* Column for the form */}
        <Col md={6} className="signup-form">
          <h2>Sign Up</h2>
          <p>Create an account to stay updated and engage with our community.</p>
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



