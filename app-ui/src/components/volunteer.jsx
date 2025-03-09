import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/volunteer.css';
import volunteerImage from './img/volunteerImage.png';

const VolunteerPage = () => {
    return (
        <div className="volunteer-page">
            <section className="hero-section" style={{ backgroundImage: `url(${volunteerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center', padding: '100px 0' }}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="hero-title" style={{ fontSize: '3rem', fontWeight: 'bold' }}>Join Us as a Volunteer</h1>
                            <p className="hero-subtitle" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Make a difference in the lives of teens through technology education in Ghana.</p>
                            <Button style = {{width:"15%"}} variant="primary" size="lg">Sign Up Now</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="roles-section" style={{ padding: '60px 0' }}>
                <Container>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', fontWeight: 'bold' }}>Volunteer Roles</h2>
                    <Row>
                        <Col md={4}>
                            <Card className="role-card" style={{ marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Mentor</Card.Title>
                                    <Card.Text>Guide and inspire students in their learning journey.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="role-card" style={{ marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Event Organizer</Card.Title>
                                    <Card.Text>Help plan and execute our educational events.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="role-card" style={{ marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Content Creator</Card.Title>
                                    <Card.Text>Create engaging content for our programs and social media.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="impact-section" style={{ padding: '60px 0' }}>
                <Container>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', fontWeight: 'bold' }}>Impact Stories</h2>
                    <Row>
                        <Col md={6}>
                            <Card className="impact-card" style={{ marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title>John's Story</Card.Title>
                                    <Card.Text>John, a volunteer mentor, helped a student develop a passion for coding, leading to a scholarship opportunity.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="impact-card" style={{ marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Mary's Story</Card.Title>
                                    <Card.Text>Mary organized a successful fundraising event that provided laptops to an entire classroom.</Card.Text>
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
                            <Form.Label>Preferred Volunteer Role</Form.Label>
                            <Form.Control as="select">
                                <option>Mentor</option>
                                <option>Event Organizer</option>
                                <option>Content Creator</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">Sign Up</Button>
                    </Form>
                </Container>
            </section>
        </div>
    );
};

export default VolunteerPage;