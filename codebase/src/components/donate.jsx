// Donate.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Styles/donate.css';
import paypalLogo from '/Users/dntentia/Library/CloudStorage/OneDrive-BereaCollege/Spring 2024/TiC-Foundation/codebase/src/components/img/paypal.png'; // Replace with your actual import paths
import visaLogo from '/Users/dntentia/Library/CloudStorage/OneDrive-BereaCollege/Spring 2024/TiC-Foundation/codebase/src/components/img/visa.png';
import mastercardLogo from '/Users/dntentia/Library/CloudStorage/OneDrive-BereaCollege/Spring 2024/TiC-Foundation/codebase/src/components/img/mastercard.png';
import amexLogo from '/Users/dntentia/Library/CloudStorage/OneDrive-BereaCollege/Spring 2024/TiC-Foundation/codebase/src/components/img/amex.png';



function Donate() {
  const [donateAnonymously, setDonateAnonymously] = useState(true);
  const handleDonateAnonymouslyChange = () => {
    setDonateAnonymously(!donateAnonymously);
  };


  const handleDonate = () => {
    // Replace 'YOUR_PAYPAL_EMAIL' with your actual PayPal email
    const paypalEmail = 'isaackwamenarteh21@gmail.com';


    // Fetch the donation amount from the form or set it directly
    const donationAmount = document.getElementById('formAmount').value || 10;

    // Create the PayPal donation link
    const paypalLink = `https://paypal.me/nartehi?${paypalEmail}?amount=${donationAmount}`;

    // Open the PayPal donation link in a new tab
    window.open(paypalLink, '_blank');
    const allCountriesOptions = () => {
      // Here you would return an array of all countries. For brevity, we'll show just a few.
      return [
        "United States of America (USA)",
        "United Kingdom (UK)",
        "Canada",
        "Australia",
      ].map((country) => <option key={country} value={country}>{country}</option>);
      
    };
  };

  return (
    <Container className="donate-container my-5">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2>You are donating to:</h2>
          <h3>Every child having a quality Computer Education</h3>
           <p>Your generous donation helps us continue our mission and support the community. 
            Thank you for your contribution!</p>
          <img src="https://www.eifl.net/sites/default/files/styles/resources_detail_page/public/2015-11-24_eifl_librairy_launch-0433_3.jpg?itok=huqn1RqA" alt="Impact" className="img-fluid" />
        </Col>
        <Col md={6}>
          <div className="donation-amount-section">
            <h4>Select Donation Amount</h4>
            <div className="donation-amount-buttons">
              <Button variant="outline-primary" className="donation-amount">$99</Button>
              <Button variant="outline-primary" className="donation-amount">$249</Button>
              <Button variant="outline-primary" className="donation-amount">$499</Button>
              <Button variant="outline-primary" className="donation-amount">$999</Button>
            </div>
            <Form.Group controlId="formOtherAmount">
              <Form.Label>Other Amount (USD)</Form.Label>
              <Form.Control type="number" placeholder="Enter other amount" />
            </Form.Group>
            <h4>Payment Method</h4>
            <div className="payment-methods">
              <Button variant="outline-secondary" className="payment-method">
                <img src={paypalLogo} alt="PayPal" />
              </Button>
              <Button variant="outline-secondary" className="payment-method">
                <img src={visaLogo} alt="Visa" />
              </Button>
              <Button variant="outline-secondary" className="payment-method">
                <img src={mastercardLogo} alt="MasterCard" />
              </Button>
              <Button variant="outline-secondary" className="payment-method">
                <img src={amexLogo} alt="American Express" />
              </Button>
            </div>
            <Form.Group controlId="formFrequency">
              <Form.Label>Frequency</Form.Label>
              <Form.Control as="select" defaultValue="Monthly">
                <option value="One Time">One Time</option>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
                <option value="Yearly">Yearly</option>
              </Form.Control>
            </Form.Group>
            <Button variant="success" onClick={handleDonate} className="w-100 mt-3">
              Donate Now
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
      <Col md={6} className="donate-info">
          <Form>
            <Form.Check 
              type="checkbox"
              id="anonymousCheck"
              label="Donate anonymously"
              checked={donateAnonymously}
              onChange={handleDonateAnonymouslyChange}
            />
            {!donateAnonymously && (
              <>
                <h4>Personal Details</h4>
                <Form.Group controlId="formFirstName">
                  <Form.Control required type="text" placeholder="First Name*" />
                </Form.Group>
                <Form.Group controlId="formLastName">
                  <Form.Control required type="text" placeholder="Last Name*" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control required type="email" placeholder="Email*" />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Control required type="tel" placeholder="Phone*" />
                </Form.Group>
                <Form.Group controlId="formAddress">
                  <Form.Control type="text" placeholder="Contact Address" />
                </Form.Group>
                <Form.Group controlId="formCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    {/* Populate this list with actual countries */}
                    <option value="USA">United States of America (USA)</option>
                    {/* Add other countries */}
                  </Form.Control>
                </Form.Group>
              </>
            )}
            <h4>Our Promises to You</h4>
            <p>Without your loyal support, we couldn't do the vital work we do. That's why we promise to uphold</p>
          </Form>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Donate;