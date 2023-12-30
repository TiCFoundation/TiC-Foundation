

import React from 'react';
import './Styles/testimonials.css'; // Create a CSS file for styling
import { Container, Row, Col } from 'react-bootstrap';

function Testimonials() {
  return (
    <div className="testimonials">
      <h2>What Our Students Say</h2>

      <Container>
        <Row>
          <Col md={4}>
            <div className="testimonial-item">
              {/* Insert testimonial images here */}
              <img src="path/to/testimonial-1.jpg" alt="Client 1" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <cite>Client 1</cite>
            </div>
          </Col>

          <Col md={4}>
            <div className="testimonial-item">
              {/* Insert testimonial images here */}
              <img src="path/to/testimonial-2.jpg" alt="Client 2" />
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <cite>Client 2</cite>
            </div>
          </Col>

          <Col md={4}>
            <div className="testimonial-item">
              {/* Insert testimonial images here */}
              <img src="path/to/testimonial-3.jpg" alt="Client 3" />
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <cite>Client 3</cite>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
