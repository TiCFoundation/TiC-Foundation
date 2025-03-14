import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/career-prep.css';
import csImage from './img/cs.png';
import aiImage from './img/ai.png';
import webDevImage from './img/web-dev.png';
import dataScienceImage from './img/data-science.png';
import cybersecurityImage from './img/cybersecurity.png';

const CareerPrep = () => {
    const [showText, setShowText] = useState({
        cs: true,
        ai: true,
        webDev: true,
        dataScience: true,
        cybersecurity: true
    });

    const toggleText = (field) => {
        setShowText(prevState => ({ ...prevState, [field]: !prevState[field] }));
    };

    return (
        <Container className="career-prep" style={{ padding: '20px' }}>
            <header className="header" style={{ backgroundColor: '#f8f9fa', padding: '20px', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '2.5em', margin: '0' }}>Career Prep for Teens</h1>
                <p style={{ fontSize: '1.2em', margin: '10px 0 0' }}>Unlock your potential in the world of technology</p>
            </header>
            <section className="fields">
                <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Fields in Computer Science</h2>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={csImage} alt="Computer Science" style={{ height: '150px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>Computer Science</Card.Title>
                                {showText.cs && (
                                    <Card.Text onClick={() => toggleText('cs')} style={{ cursor: 'pointer' }}>
                                        Learn the fundamentals of computing, algorithms, and data structures.
                                    </Card.Text>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={aiImage} alt="Artificial Intelligence" style={{ height: '150px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>Artificial Intelligence</Card.Title>
                                {showText.ai && (
                                    <Card.Text onClick={() => toggleText('ai')} style={{ cursor: 'pointer' }}>
                                        Explore the world of AI and machine learning to create intelligent systems.
                                    </Card.Text>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={webDevImage} alt="Web Development" style={{ height: '150px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>Web Development</Card.Title>
                                {showText.webDev && (
                                    <Card.Text onClick={() => toggleText('webDev')} style={{ cursor: 'pointer' }}>
                                        Build and design websites and web applications.
                                    </Card.Text>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={dataScienceImage} alt="Data Science" style={{ height: '150px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>Data Science</Card.Title>
                                {showText.dataScience && (
                                    <Card.Text onClick={() => toggleText('dataScience')} style={{ cursor: 'pointer' }}>
                                        Analyze and interpret complex data to help make informed decisions.
                                    </Card.Text>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={cybersecurityImage} alt="Cybersecurity" style={{ height: '150px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>Cybersecurity</Card.Title>
                                {showText.cybersecurity && (
                                    <Card.Text onClick={() => toggleText('cybersecurity')} style={{ cursor: 'pointer' }}>
                                        Protect systems and networks from digital attacks.
                                    </Card.Text>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className="resources" style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>Resources</h2>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>Resources Group 1</Card.Title>
                                <ul className="list-unstyled">
                                    <li><a href="https://www.codecademy.com/" className="text-primary">Codecademy</a></li>
                                    <li><a href="https://www.khanacademy.org/computing/computer-science" className="text-primary">Khan Academy</a></li>
                                    <li><a href="https://www.coursera.org/" className="text-primary">Coursera</a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>Resources Group 2</Card.Title>
                                <ul className="list-unstyled">
                                    <li><a href="https://www.edx.org/" className="text-primary">edX</a></li>
                                    <li><a href="https://www.udacity.com/" className="text-primary">Udacity</a></li>
                                    <li><a href="https://www.pluralsight.com/" className="text-primary">Pluralsight</a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>Resources Group 3</Card.Title>
                                <ul className="list-unstyled">
                                    <li><a href="https://www.freecodecamp.org/" className="text-primary">freeCodeCamp</a></li>
                                    <li><a href="https://www.udemy.com/" className="text-primary">Udemy</a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default CareerPrep;