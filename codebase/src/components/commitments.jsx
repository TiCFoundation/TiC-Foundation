import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Styles/commitment.css';
import Testimonials from './testimonials';
function Commitment() {
  return (
    <div className="commitment">
      <h2 className='commit'>Our Commitments</h2>
      <Row>
        <Col md={4}>
          <Card className="commitment-item">
            <Card.Img variant="top" src="https://s3.amazonaws.com/uww.assets/site/blog/uw-ghana1.png" />
            <Card.Body>
              <Card.Title>Building Digital Literacy</Card.Title>
              <Card.Text>
                At TiC Foundation, we are passionate about building digital literacy among teens. Our
                commitment is to bridge the digital divide by offering programs and initiatives that
                equip young minds with essential computing skills, preparing them for the digital
                challenges of tomorrow.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="commitment-item">
            <Card.Img variant="top" src="https://lh4.googleusercontent.com/-ILLY47SzyRCSCb5-1rmiBi1L2RdlF_4tQQWVBCE-qB-l0jhDIjQZuKHEi2BCWSlyiBIISAxAx6JYJbzbz8Nqw3SMko_a7nGM89YTs62FxzVVQIQXxRRS9cwLUd0oPUR1fwUOR8HGqfvMTtx3Q" />
            <Card.Body>
              <Card.Title>Inspiring Tech for Good</Card.Title>
              <Card.Text>
                At Teens In Computing (TiC) Foundation, we are dedicated to inspiring teens to harness
                the power of technology for positive change. Our commitment lies in encouraging ethical
                and responsible use of computing skills, empowering teens to become not just proficient
                coders but also responsible digital citizens making a positive impact on society.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="commitment-item">
            <Card.Img variant="top" src="https://3blaws.s3.amazonaws.com/styles/carousel_2x/s3/images/DSC06369.JPG" />
            <Card.Body>
              <Card.Title>Fostering Inclusivity in Tech</Card.Title>
              <Card.Text>
                TiC Foundation is committed to fostering inclusivity in the tech industry. We believe
                in creating a diverse and inclusive environment for teens in computing, ensuring that
                every young mind, regardless of background, has equal opportunities to explore, learn,
                and innovate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add more commitment items as needed */}
      <Testimonials/>
    </div>
  );
}

export default Commitment;
