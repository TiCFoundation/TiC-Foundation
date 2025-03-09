import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/mentorship.css';
import mentorshipImage from './img/mentorshipImage.png';
import mentor1Image from './img/mentor1Image.png';
import mentor2Image from './img/mentor2Image.png';

const MentorshipPage = () => {
    return (
        <div className="mentorship-page">
            <section className="hero-section" style={{
                backgroundImage: `url(${mentorshipImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                minHeight: '100vh',
                padding: '100px 0'
            }}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="hero-title" style={{fontSize: '3rem', fontWeight: 'bold'}}>Become a
                                Mentor</h1>
                            <p className="hero-subtitle" style={{fontSize: '1.5rem', marginBottom: '20px'}}>Empower the
                                next generation through mentorship.</p>
                            <Button style={{width:"15%"}} variant="primary" size="lg">Sign Up Now</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="program-details-section" style={{padding: '60px 0'}}>
                <Container>
                    <h2 className="section-title"
                        style={{textAlign: 'center', marginBottom: '40px', fontSize: '2rem', fontWeight: 'bold'}}>Our
                        Mentorship Programs</h2>
                    <Row>
                        <Col md={6}>
                            <Card className="program-card" style={{ marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Tech Mentorship</Card.Title>
                                    <Card.Text>Guide students in learning coding, robotics, and other tech skills.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="program-card" style={{ marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Career Mentorship</Card.Title>
                                    <Card.Text>Help students prepare for their future careers with guidance and support.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mentor-stories-section" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <Container>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', fontWeight: 'bold' }}>Mentor Stories</h2>
                    <Row>
                        <Col md={6}>
                            <Card className="mentor-card" style={{ marginBottom: '20px' }}>
                                <Card.Img variant="top" src={mentor1Image} />
                                <Card.Body>
                                    <Card.Title>Jane's Story</Card.Title>
                                    <Card.Text>Jane helped a student develop a passion for coding, leading to a scholarship opportunity.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="mentor-card" style={{ marginBottom: '20px' }}>
                                <Card.Img variant="top" src={mentor2Image} />
                                <Card.Body>
                                    <Card.Title>Mark's Story</Card.Title>
                                    <Card.Text>Mark's guidance helped a student secure an internship at a top tech company.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="signup-section" style={{ padding: '60px 0' }}>
                <Container>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', fontWeight: 'bold' }}>Get Involved</h2>
                    <Form className="signup-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formRole">
                            <Form.Label>Preferred Mentorship Program</Form.Label>
                            <Form.Control as="select">
                                <option>Tech Mentorship</option>
                                <option>Career Mentorship</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">Sign Up</Button>
                    </Form>
                </Container>
            </section>
        </div>
    );
};

export default MentorshipPage;