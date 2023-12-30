// AboutUs.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles/about_us.css';

function AboutUs() {
  return (
    <div className="about-us">
      <section className="intro-section">
        <Container>
          <Row>
            <Col>
              <h1>Welcome to Our Organization</h1>
              <p>Discover who we are and what we stand for.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="story-section">
        <Container>
          <Row>
            <Col>
              <h2>Our Story</h2>
              <p>Learn about our journey and how it all began.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="visuals-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Our Mission</h2>
              <p>Join Us</p>
              <img src="https://github.com/CSC493-Computing-Design-Practicum/2023-fall-project-nartehi/blob/develop/codebase/tic-foundation/public/images/education.png?raw=true" alt="Visual 1" />
            </Col>
            <Col md={6}>
            <h2>Our Mission</h2>
              <p>Learn About Us</p>
              <img src="path/to/image2.jpg" alt="Visual 2" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
}

export default AboutUs;
