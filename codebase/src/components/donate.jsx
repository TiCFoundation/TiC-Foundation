import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Styles/donate.css';
import paypalLogo from './img/paypal.png'; // Replace with your actual import paths
import visaLogo from './img/visa.png';
import mastercardLogo from './img/mastercard.png';
import amexLogo from './img/amex.png';

function Donate() {
  const [donateAnonymously, setDonateAnonymously] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleDonateAnonymouslyChange = () => {
    setDonateAnonymously(!donateAnonymously);
  };

  const selectDonationAmount = (amount) => {
    setSelectedAmount(amount);
  };

  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  
  const handleDonate = async () => {
    const donationAmount = selectedAmount;
    const paymentMethod = selectedPaymentMethod; // e.g., 'paypal'
  
    if (!donationAmount || !paymentMethod) {
      alert('Please select a donation amount and payment method.');
      return;
    }
  
    if (!donateAnonymously) {
      const firstName = document.getElementById('formFirstName').value;
      const lastName = document.getElementById('formLastName').value;
      const email = document.getElementById('formEmail').value;
      const phone = document.getElementById('formPhone').value;
  
      if (!firstName || !lastName || !email || !phone) {
        alert('Please fill in all required fields.');
        return;
      }
  
    }
  
    const requestBody = donateAnonymously ? {
      amount: donationAmount,
      paymentMethod: paymentMethod,
    } : {
      amount: donationAmount,
      paymentMethod: paymentMethod,

    };
  
    try {
      const response = await fetch('/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        alert('Thank you for your donation!');
        // Optionally reset form or redirect user here
      } else {
        alert(`Error: ${responseData.error}`);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Donation error:', error);
    }
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
              {[20, 50, 99, 249, 499, 999].map((amount) => (
                <Button 
                  key={amount}
                  variant={selectedAmount === amount ? "primary" : "outline-primary"}
                  className={`donation-amount ${selectedAmount === amount ? 'selected-donation-amount' : ''}`}
                  onClick={() => selectDonationAmount(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <Form.Group controlId="formOtherAmount">
              <Form.Label>Other Amount (USD)</Form.Label>
              <Form.Control type="number" placeholder="Enter other amount" />
            </Form.Group>
            <h4>Payment Method</h4>
            <div className="payment-methods">
              {[{id: 'paypal', logo: paypalLogo}, {id: 'visa', logo: visaLogo}, {id: 'mastercard', logo: mastercardLogo}, {id: 'amex', logo: amexLogo}].map((method) => (
                <Button 
                  key={method.id}
                  variant={selectedPaymentMethod === method.id ? "secondary" : "outline-secondary"}
                  className={`payment-method ${selectedPaymentMethod === method.id ? 'selected-payment-method' : ''}`}
                  onClick={() => selectPaymentMethod(method.id)}
                >
                  <img src={method.logo} alt={method.id} />
                </Button>
              ))}
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
                    <option value="GHA">Ghana (GHA)</option>
                    <option value="BR">Brazil (BR)</option>
                    <option value="UK">United Kingdom (UK)</option>
                    <option value="FRA">France (FRA)</option>
                    <option value="GAM">The Gambia (GAM)</option>
                    <option value="KEN"> Kenya (KEN)</option>
                    <option value="MOR">Morocco (MOR)</option>
                    <option value="NIG">Nigeria (NIG)</option>
                    <option value="UG">Uganda (UG)</option>
                    <option value="RW">Rwanda (RW)</option>
                    <option value="LI">Liberia (LI)</option>
                    <option value="LEB">Lebanon (LEB)</option>
                    <option value="HAI">Haiti (HAI)</option>
                    
                    
                    {/* Add other countries */}
                  </Form.Control>
                </Form.Group>
              </>
            )}
            <h4>Our Promises to You</h4>
            <p>Without your loyal support, we can not do the vital work we do. 
              That's why we promise to uphold integrity in our operations and make sure every contributions is put to use
              to benefit those who need it most.

            </p>
          </Form>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Donate;