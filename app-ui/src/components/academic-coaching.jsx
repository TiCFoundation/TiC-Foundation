import React from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import coach1 from './img/coach1.png';
import groupCoach from './img/groupCoach.png';
import skillDev from './img/skillDev.png';

const AcademicCoachingPage = () => {
    return (
        <Container fluid style={{ backgroundColor: "white", padding: "50px 0" }}>
            <Row className="justify-content-center text-center mb-5">
                <Col md={8}>
                    <h1 className="fw-bold text-dark">Academic Coaching</h1>
                    <p className="fs-5 text-secondary">
                        Unlock your potential with our expert academic coaching. Personalized guidance to help students achieve excellence.
                    </p>
                    <Button style={{width:"15%"}} variant="primary" size="lg">Get Started</Button>
                </Col>
            </Row>

            {/* Coaching Services */}
            <Row className="justify-content-center">
                {[
                    { title: "One-on-One Coaching", img: coach1, text: "Personalized coaching sessions to help students excel academically." },
                    { title: "Group Coaching", img: groupCoach, text: "Interactive group sessions to encourage collaborative learning and motivation." },
                    { title: "Skill Development", img: skillDev, text: "Develop essential study skills, time management, and critical thinking." }
                ].map((service, index) => (
                    <Col md={4} key={index}>
                        <Card className="shadow-lg border-0 h-100">
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Title className="fw-bold text-center">{service.title}</Card.Title>
                                <Card.Text className="text-center">
                                    {service.text}
                                </Card.Text>
                                <Button style={{width:"23%"}} variant="primary">
                                    {index === 1 ? "Join a Session" : "Learn More"}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Why Choose Us Section */}
            <Row className="text-center mt-5">
                <Col>
                    <h2 className="fw-bold text-dark">Why Choose TiC Academic Coaching?</h2>
                </Col>
            </Row>
            <Row className="justify-content-center text-center">
                {["📚 Personalized Learning", "🎓 Expert Coaches", "🚀 Proven Success"].map((heading, index) => (
                    <Col md={3} key={index}>
                        <Card className="border-0">
                            <Card.Body>
                                <h4>{heading}</h4>
                                <p>{index === 0 ? "Tailored sessions to fit each student's needs." : index === 1 ? "Guidance from experienced professionals." : "Helping students achieve academic excellence."}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Testimonials Section */}
            <Row className="text-center mt-5">
                <Col>
                    <h2 className="fw-bold text-dark">What Our Students Say</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {["Sarah, High School Student", "James, College Student"].map((name, index) => (
                    <Col md={4} key={index} className="mb-4" style={{ margin: "0 10px" }}>
                        <Card className="shadow-sm border-0 p-3" style={{ width: "90%" }}>
                            <Card.Text>
                                {index === 0 ? "\"TiC Coaching helped me improve my grades and confidence. The one-on-one sessions were invaluable!\"" : "\"The group coaching sessions kept me motivated and on track. Highly recommend!\""}
                            </Card.Text>
                            <h5>- {name}</h5>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* FAQ Section */}
            <Row className="text-center mt-5">
                <Col>
                    <h2 className="fw-bold text-dark">Frequently Asked Questions</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col style={{width:"24%"}} md={6}>
                    <Accordion flush>
                        {["How do I sign up for coaching?", "What subjects do you cover?", "Is there a fee for coaching?"].map((question, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>{question}</Accordion.Header>
                                <Accordion.Body className="text-start">
                                    {index === 0 && "Simply click the 'Get Started' button and fill out the registration form."}
                                    {index === 1 && "We cover a wide range of subjects, including math, science, and language arts."}
                                    {index === 2 && "Our basic coaching sessions are free, but premium plans are available."}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
            </Row>

            {/* Call to Action */}
            <Row className="mt-5 text-center">
                <Col>
                    <h2 className="fw-bold text-dark">Start Your Journey Today</h2>
                    <p className="fs-5 text-secondary">Sign up for a coaching session and take the next step toward success.</p>
                    <Button style={{width:"10%"}} variant="success" size="lg">Sign Up Now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AcademicCoachingPage;