import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Styles/commitment.css';
import Testimonials from './testimonials';
function Commitment() {
  return (
    <div className="commitment">
      <h2 className='commit'>Our Commitments</h2>
      <Row>
        <Col className='col-card'md={4}>
          <Card className="commitment-item">
            <Card.Img className="card-img" variant="top" src="https://s3.amazonaws.com/uww.assets/site/blog/uw-ghana1.png" />
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>Building Digital Literacy</Card.Title>
              <Card.Text>
              At TiC Foundation, we are dedicated to fostering digital literacy among teens by bridging the digital divide. 
              Through programs and initiatives, we equip young people with essential computing skills to prepare them for 
              future digital challenges.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className='col-card'md={4}>
          <Card className="commitment-item">
            <Card.Img className="card-img" variant="top" src="https://lh4.googleusercontent.com/-ILLY47SzyRCSCb5-1rmiBi1L2RdlF_4tQQWVBCE-qB-l0jhDIjQZuKHEi2BCWSlyiBIISAxAx6JYJbzbz8Nqw3SMko_a7nGM89YTs62FxzVVQIQXxRRS9cwLUd0oPUR1fwUOR8HGqfvMTtx3Q" />
            <Card.Body>
              <Card.Title className='card-title'>Inspiring Tech for Good</Card.Title>
              <Card.Text>
              TiC Foundation inspires teens to leverage technology for positive change. By promoting ethical and responsible use of computing skills, 
              it empowers teens to become skilled coders and responsible digital citizens who contribute meaningfully to society.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className='col-card'md={4}>
          <Card className="commitment-item">
            <Card.Img className="card-img" variant="top" src="https://3blaws.s3.amazonaws.com/styles/carousel_2x/s3/images/DSC06369.JPG" />
            <Card.Body>
              <Card.Title className='card-title'>Fostering Inclusivity in Tech</Card.Title>
              <Card.Text>
              The TiC Foundation is dedicated to fostering inclusivity in the tech industry by creating opportunities for all teens in computing. 
              We aim to ensure equal access to learning and innovation, regardless of background, in a diverse and inclusive environment.
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
