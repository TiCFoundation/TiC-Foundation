import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, database } from '../firebase'; // Ensure the correct import path
import './Styles/signUp.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

function SignUp() {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    password: ''
  });
  const [flashMessage, setFlashMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Validate input
      if (!signupData.email || !signupData.password) {
        throw new Error('Email and password are required.');
      }
      
      // Create user
      const userCredential = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
      const user = userCredential.user;

      // Store additional user data in the database
      await set(ref(database, 'users/' + user.uid), {
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        email: signupData.email,
        age: signupData.age
      });

      setFlashMessage({
        type: "success",
        message: "You have successfully signed up!"
      });

      setSignupData({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        password: ''
      });
    } catch (error) {
      console.error("Sign Up Error:", error); // Log error for debugging
      setFlashMessage({ type: "error", message: error.message });
    }

    setTimeout(() => {
      setFlashMessage(null);
    }, 3000);
  };

  return (
    <div className="signup">
      <Row>
        <Col md={6} className="signup-info">
          <h3>Welcome to Our Community</h3>
          <p>
            Join our community to stay in the loop with the latest updates, participate in our programs, and connect with like-minded individuals. By signing up, you gain access to exclusive content, resources, and workshops that are designed to empower and inspire. Whether you're a beginner or an experienced tech enthusiast, there's something here for everyone.
          </p>
          <img src="https://thumbs.dreamstime.com/b/community-concept-pictogram-showing-figures-happy-family-84451213.jpg" alt="Community" className="img-fluid" />
        </Col>

        <Col md={6} className="signup-form">
          <h2>Sign Up</h2>
          <p>Create an account to stay updated and engage with our community.</p>
          {flashMessage && (
            <div className={`flash-message ${flashMessage.type}`}>
              {flashMessage.message}
            </div>
          )}
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onChange={handleChange}
                value={signupData.firstName}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                onChange={handleChange}
                value={signupData.lastName}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={signupData.email}
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                placeholder="Enter your age"
                onChange={handleChange}
                value={signupData.age}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={signupData.password}
              />
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
