// ExecutivePage.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles/executive.css'; // Create a CSS file for styling

function ExecutivePage() {
  const executives = [
    {
      id: 1,
      name: 'Isaac Narteh',
      imageSrc: 'https://oldnavyprod.a.bigcontent.io/v1/static/240501_25-M1203_B_DP_Sale_0501',
      role: 'Executive Director',
      workExperience: 'Software Engineer @ Goldman Sachs',
      
    },
    {
      id: 2,
      name: 'Liliane Azabe',
      imageSrc: 'https://ngict.fmcide.gov.ng/wp-content/uploads/2024/01/Mask-group-6.png',
      role: 'Assistant Program Director',
      workExperience: 'Corporate Intern @ Occidental Petroleum',
      //additionalDetails: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: 'Kyle Drummonds',
      imageSrc: 'https://oldnavyprod.a.bigcontent.io/v1/static/240501_25-M1203_B_DP_Sale_0501',
      role: 'Program Manager',
      workExperience: 'Software Engineer @ Wells Fargo',
      //additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
    id: 4,
      name: 'Samiha Sultana',
      imageSrc: 'https://ngict.fmcide.gov.ng/wp-content/uploads/2024/01/Mask-group-6.png',
      role: 'Social Media Manager',
      workExperience: 'Software Engineer @ Bank of America',
      //additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    // Add more executives as needed
    },
    {
      id: 5,
        name: 'Bright Awiakye',
        imageSrc: 'https://oldnavyprod.a.bigcontent.io/v1/static/240501_25-M1203_B_DP_Sale_0501',
        role: 'Legal Advisor',
        workExperience: 'Corporal, Ghana Police Service',
        //additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      // Add more executives as needed
      },
      {
        id: 6,
          name: 'Dimitrios Ntentia',
          imageSrc: 'https://oldnavyprod.a.bigcontent.io/v1/static/240501_25-M1203_B_DP_Sale_0501',
          role: 'Technical Lead',
          workExperience: 'PhD @ Purdue  University',

        //  additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        // Add more executives as needed
        },
        {
          id: 7,
            name: 'Frank Owusu',
            imageSrc: 'https://oldnavyprod.a.bigcontent.io/v1/static/240501_25-M1203_B_DP_Sale_0501',
            role: 'Communication  Director' ,
            workExperience: 'Automechanic Engineer',
  
          //  additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          // Add more executives as needed
          },
          {
            id: 8,
              name: 'Prince Agyemang',
              imageSrc: 'https://oldnavyprod.a.bigcontent.io/v1/static/240501_25-M1203_B_DP_Sale_0501',
              role: 'Ground Operation Officer',
              workExperience: 'Self Employed',
    
            //  additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            // Add more executives as needed
            },
            {
              id: 9,
                name: 'John Arthur',
                imageSrc: 'https://oldnavyprod.a.bigcontent.io/v1/static/240501_25-M1203_B_DP_Sale_0501',
                role: 'Chief Field Officer',
                workExperience: 'Teacher',
      
              //  additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              // Add more executives as needed
              },

  ];

  return (
    <div className="executive-page">
      <Container>
        <h2 className='executives'>Our Executives</h2>
        <Row>
          {executives.map((executive) => (
            <Col key={executive.id} md={4}>
              <div className="executive-item">
                <img src={executive.imageSrc} alt={executive.name} />
                <h3>{executive.name}</h3>
                <p>{executive.role}</p>
                <p>{executive.workExperience}</p>
                <p>{executive.additionalDetails}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ExecutivePage;
