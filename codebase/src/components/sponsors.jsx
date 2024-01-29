import React from 'react';
import './Styles/sponsors.css'; // Ensure this file is updated
import { Container, Row, Col } from 'react-bootstrap';


function Sponsors() {
  return (
    <div className="sponsors">
      <h2>Our Sponsors and Partners</h2>

      <Container>
        <Row>
          {/* Platinum Sponsors */}
          <Col md={4} className="sponsor-category">
            <h3>Platinum Sponsors</h3>
            {/* Insert platinum sponsor images */}
            <img src="https://alltogether.swe.org/wp-content/uploads/2021/05/MSF-Logo.jpeg" alt="Platinum Sponsor 1" />
            {/* Add more platinum sponsors as needed */}
          </Col>

          {/* Gold Sponsors */}
          <Col md={4} className="sponsor-category">
            <h3>Gold Sponsors</h3>
            {/* Insert gold sponsor images */}
            <img src="https://lh3.googleusercontent.com/N-rovPQOgSGIGt8sgz6YKWvSDyY5B0BCcTPSAPyjeI5hoLoI1uYuuZ31g943nl0pHMXsQPLE8GiKFiNdKRaTXmvc8pEFLSxg" alt="Gold Sponsor 1" />
            {/* Add more gold sponsors as needed */}
          </Col>

          {/* Silver Sponsors */}
          <Col md={4} className="sponsor-category">
            <h3>Silver Sponsors</h3>
            {/* Insert silver sponsor images */}
            <img src="https://campaign.berea.edu/wp-content/uploads/2022/06/primary_white_blue_bg.jpg" alt="Silver Sponsor 1" />
            {/* Add more silver sponsors as needed */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sponsors;
