import React from 'react';
import IsaacImage from './img/IsaacImage.png';
import LilianeImage from './img/LilianeImage.png';
import KyleImage from './img/KyleImage.png';
import SamihaImage from './img/SamihaImage.png';
import KafuiImage from './img/KafuiImage.png';
import DimitrosImage from './img/DimitrosImage.png';
import RamosImage from './img/RamosImage.png';
import BrightImage from './img/BrightImage.png';
import FrankImage from './img/FrankImage.png';

const TeamPage = () => {
    const executives = [
        {
            id: 1,
            name: 'Isaac Narteh',
            imageSrc: IsaacImage,
            role: 'Executive Director',
            workExperience: 'Software Engineer @ Goldman Sachs',
            bio: 'Passionate about technology and coding, with a desire for developing innovative solutions.'
        },
        {
            id: 2,
            name: 'Kyle Drummonds',
            imageSrc: KyleImage,
            role: 'Program Manager',
            workExperience: 'Software Engineer @ Wells Fargo',
            bio: 'Dedicated to managing projects efficiently and ensuring successful outcomes.'
        },
        {
            id: 3,
            name: 'Dimitrios Ntentia',
            imageSrc: DimitrosImage,
            role: 'Technical Lead',
            workExperience: 'PhD @ Purdue University',
            bio: 'Expert in technical leadership and research, driving innovation in technology.'
        },
        {
            id: 4,
            name: 'Alejandro Ramos',
            imageSrc: RamosImage,
            role: 'UX/UI Designer',
            workExperience: 'Software Engineer @ Bank of America',
            bio: 'Creative designer focused on user experience and interface design.'
        },
        {
            id: 5,
            name: 'Kafui Gle',
            imageSrc: KafuiImage,
            role: 'Developer',
            workExperience: 'Sophomore @ Berea College',
            bio: 'Skilled developer with a passion for creating efficient and scalable software.'
        },
        {
            id: 6,
            name: 'Samiha Sultana',
            imageSrc: SamihaImage,
            role: 'Social Media Manager',
            workExperience: 'Software Engineer @ Bank of America',
            bio: 'Experienced in managing social media platforms and engaging with the community.'
        },
        {
            id: 7,
            name: 'Liliane Azabe',
            imageSrc: LilianeImage,
            role: 'Assistant Program Director',
            workExperience: 'Graduating Senior @ Berea College',
            bio: 'Committed to supporting program initiatives and ensuring their success.'
        },
        {
            id: 8,
            name: 'Bright Awiakye',
            imageSrc: BrightImage,
            role: 'Legal Advisor',
            workExperience: 'Corporal, Ghana Police Service',
            bio: 'Providing legal advice and ensuring compliance with regulations.'
        },
        {
            id: 9,
            name: 'Frank Owusu',
            imageSrc: FrankImage,
            role: 'Ground Operation Officer',
            workExperience: 'Automechanic @ Toyota Ghana',
            bio: 'Expert in ground operations and mechanical maintenance.'
        }
    ];

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    };

    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    };

    const colStyle = {
        flex: '1 0 30%',
        padding: '20px',
        boxSizing: 'border-box',
    };

    const executiveItemStyle = {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };

    const imageStyle = {
        width: '100%',
        borderRadius: '10px',
        marginBottom: '10px',
    };

    const nameStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    };

    const roleStyle = {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '5px',
    };

    const workExperienceStyle = {
        fontSize: '0.9rem',
        color: '#999',
    };

    const bioStyle = {
        fontSize: '0.9rem',
        color: '#333',
        marginTop: '10px',
    };

    return (
        <div style={containerStyle}>
            <h2>Our Great Leadership Team</h2>
            <div style={rowStyle}>
                {executives.map((executive) => (
                    <div key={executive.id} style={colStyle}>
                        <div style={executiveItemStyle}>
                            <img src={executive.imageSrc} alt={executive.name} style={imageStyle} />
                            <h3 style={nameStyle}>{executive.name}</h3>
                            <p style={roleStyle}>{executive.role}</p>
                            <p style={workExperienceStyle}>{executive.workExperience}</p>
                            <p style={bioStyle}>{executive.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;