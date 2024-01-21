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
              <h1>TiC Foundation: Empowering Through Technology</h1>
              <hr />
              <br />
              <p className='technology'>The TiC Foundation was born out of the belief that every child, 
                regardless of their background, deserves access to quality computer education. 
                Our journey is a testament to the transformative power of education, and we are 
                committed to breaking down barriers and bridging the digital gap for children in 
                underserved communities.Through our programs, we aim to provide hands-on, practical 
                learning experiences that go beyond traditional classroom settings. 
                Our vision is not just to introduce computers but to ignite curiosity, foster creativity, 
                and equip the next generation with the skills they need to thrive in the digital age.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="story-section">
        <Container>
          <Row>
            <Col className="founder" md={6}>
                <img src="./img/founder.jpg" className="founder" alt='founder'/>
            </Col>

            <Col md ={6}>
              <h2 className='founderstory'>Our Founder's Story</h2>
              <br />
              <h4 className='bridge'> Early Experiences as Catalyst for Empowerment</h4>
              <hr />
              <p className='story'>Growing up in the heart of Ghana, Isaac Narteh, embarked on a journey shaped by a profound 
                lack of access to computer education in the schools he attended. The absence of computers in the 
                classrooms meant that countless children, including himself, missed out on acquiring crucial 
                digital skills that have become indispensable in today's rapidly evolving world.
                The realization of this digital divide became even more poignant when, after completing high school, 
                he returned to his community to teach children in Grades 4, 5, and 6. Witnessing the same lack of 
                resources in the classrooms mirrored his own childhood experiences. It was a stark reminder that the 
                opportunities he wished for during his school days were still elusive for the younger generation.
                Determined to make a difference, he pursued a journey across continents, landing in Berea College in the 
                United States to study computer science. Armed with knowledge and a burning passion for change, he founded the 
                TiC Foundation — a non-profit organization with a singular mission: to empower young minds 
                with practical computer skills.</p>
                <br />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="visuals-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className='ourMission'>Our Mission</h2>
              <p className='mission'>Our mission is to collaborate and provide essential computer skills to young people from low-income
                families with resources and programs that will assist them to gain confidence in computing and 
                support them to break into tech fields in institutions of higher learning.
                </p>
              <img src="https://seattlemedium.com/wp-content/uploads/2020/12/distance-learning-748X486.jpg" className="missionImage" alt="mission" />
            </Col>
            <Col md={6}>
            <h2 className='ourVision'>Our Vision</h2>
              <p className='vision'> Our vision is to equip, motivate and empower underprivileged young people 
                with computer compentencies by collaborating
                with established educational institutions and organizations in Ghana and worldwide
                </p>
              <img src="https://img.freepik.com/free-photo/portrait-black-child-while-doing-homework_641386-254.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=ais"className='visionImage' alt="vision" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
}

export default AboutUs;
