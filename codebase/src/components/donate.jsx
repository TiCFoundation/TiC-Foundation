// Donate.js

import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Styles/donate.css';

function Donate() {
  const handleDonate = () => {
    // Replace 'YOUR_PAYPAL_EMAIL' with your actual PayPal email
    const paypalEmail = 'isaackwamenarteh21@gmail.com';

    // Fetch the donation amount from the form or set it directly
    const donationAmount = document.getElementById('formAmount').value || 10;

    // Create the PayPal donation link
    const paypalLink = `https://paypal.me/nartehi?${paypalEmail}?amount=${donationAmount}`;

    // Open the PayPal donation link in a new tab
    window.open(paypalLink, '_blank');
  };

  return (
    <div className="donate">
      <Container>
        <Row>
          {/* Text and Image Column */}
          <Col md={6}>
            <h2>Our Impact</h2>
            <p>
              Your generous donation helps us continue our mission and support the community. Thank you for your contribution!
            </p>
            {/* Add your image here */}
            <img src="https://pbs.twimg.com/media/EwwHSE9XIAAur16.jpg" alt="Our Impact" className="img-fluid" />
          </Col>
          {/* Donation Form Column */}
          <Col md={6}>
            <h2>Donate to Support Our Cause</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formAmount">
                <Form.Label>Donation Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter the amount" />
              </Form.Group>

              <Button variant="primary" onClick={handleDonate}>
                Donate Now
              </Button>
            </Form>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
}

export default Donate;
