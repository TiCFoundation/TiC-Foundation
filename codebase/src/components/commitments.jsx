// Commitment.js

import React from 'react';
import './Styles/commitment.css';

function Commitment() {
  return (
    <div className="commitment">
      <h2>Our Commitments</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="commitment-item">
            <h3>Building Digital Literacy</h3>
            <p> At TiC Foundation, we are passionate about building digital literacy among teens. Our
              commitment is to bridge the digital divide by offering programs and initiatives that
              equip young minds with essential computing skills, preparing them for the digital
              challenges of tomorrow.</p>
            <img src="https://homelandghana.org/wp-content/uploads/2023/05/IMG_4951-scaled.jpg" alt="Commitment1" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="commitment-item">
            <h3>Inspiring Tech for Good</h3>
            <p>At Teens In Computing (TiC) Foundation, we are dedicated to inspiring teens to harness
              the power of technology for positive change. Our commitment lies in encouraging ethical
              and responsible use of computing skills, empowering teens to become not just proficient
              coders but also responsible digital citizens making a positive impact on society.</p>
            <img src="https://3blaws.s3.amazonaws.com/styles/carousel_2x/s3/images/DSC06369.JPG" alt="Commitment2" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="commitment-item">
            <h3>Fostering Inclusivity in Tech</h3>
            <p>TiC Foundation is committed to fostering inclusivity in the tech industry. We believe
              in creating a diverse and inclusive environment for teens in computing, ensuring that
              every young mind, regardless of background, has equal opportunities to explore, learn,
              and innovate.</p>
            <img src="https://3blaws.s3.amazonaws.com/styles/carousel_2x/s3/images/DSC06369.JPG" alt="Commitment3" />
          </div>
        </div>
      </div>

      {/* Add more commitment items as needed */}
    </div>
  );
}

export default Commitment;
