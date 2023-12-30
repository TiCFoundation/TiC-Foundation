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
            <h3>Commitment Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src="https://homelandghana.org/wp-content/uploads/2023/05/IMG_4951-scaled.jpg" alt="Commitment1" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="commitment-item">
            <h3>Commitment Title 2</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img src="https://3blaws.s3.amazonaws.com/styles/carousel_2x/s3/images/DSC06369.JPG" alt="Commitment2" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="commitment-item">
            <h3>Commitment Title 3</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img src="https://3blaws.s3.amazonaws.com/styles/carousel_2x/s3/images/DSC06369.JPG" alt="Commitment3" />
          </div>
        </div>
      </div>

      {/* Add more commitment items as needed */}
    </div>
  );
}

export default Commitment;
