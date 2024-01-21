import React, { useState, useEffect } from 'react';
import './Styles/home.css'; // Create this CSS file for styling

import backgroundImage1 from './img/image1.jpg';
import backgroundImage2 from './img/image2.jpg';
import backgroundImage3 from './img/image3.jpg';
import backgroundImage4 from './img/image4.jpg';
import backgroundImage5 from './img/image5.jpg';

const images = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentDateTime = new Date();
  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = currentDateTime.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });

  const handleDonateClick = () => {
    const subject = encodeURIComponent('Computer Donation Inquiry');
    const body = encodeURIComponent('I am interested in donating a computer. Please provide more information below.');
    window.location.href = `mailto:isaackwamenarteh21@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="home" >
      {images.map((image, index) => (
        <div
          key={index}
          className={`background-image ${currentImageIndex === index ? 'show' : ''}`}
          style={{ backgroundImage: `url(${image})` }}>

        <div className="overlay">
          <h3>The TiC Foundation</h3>
          <br />
          <h5>Unlocking Tech Dreams For Teens</h5>
          <h1 className='date'>{formattedDate} , {currentTime}</h1>
          <button onClick={handleDonateClick} className="btn btn-primary">Donate a Computer</button>
        </div>
        {/* <div className='upper'>
          <h5>We are here to inspire the young people for a technological change</h5>
          <p>Join us to make a Change through Technology</p>
        </div>    */}
      </div>
      ))}
    </div>
  );
};

export default Home;
