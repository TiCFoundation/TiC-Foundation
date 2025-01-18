// src/components/ProfilePage.js
import React, { useState } from 'react';
import { FaStar, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Styles/profile.css';

const ProfilePage = ({ name, email, image }) => {
    const [skills, setSkills] = useState([]);
    const [points, setPoints] = useState(0);
    const [goals, setGoals] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleSkillsChange = (event) => {
        setSkills(event.target.value.split(','));
    };

    const handlePointsChange = (event) => {
        setPoints(parseInt(event.target.value));
    };

    const handleGoalsChange = (event) => {
        setGoals(event.target.value);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        // Save user information (e.g., skills, points, goals) to backend
        // Display success message or handle errors
        setIsEditing(false);
    };

    return (
        <div className='profile'>
            <div className="profile-header">
                <img className="profilepic rounded-circle" src={image} alt="Profile" />
                <div className="user-info">
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
            <div className="profile-details">
                <div className="section">
                    <h3>Skills</h3>
                    {isEditing ? (
                        <input
                            type="text"
                            placeholder="Skills (comma-separated)"
                            value={skills.join(',')}
                            onChange={handleSkillsChange}
                        />
                    ) : (
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="section">
                    <h3>Goals</h3>
                    {isEditing ? (
                        <input
                            type="text"
                            placeholder="Goals"
                            value={goals}
                            onChange={handleGoalsChange}
                        />
                    ) : (
                        <p>{goals}</p>
                    )}
                </div>
                {isEditing && (
                    <div className="section">
                        <h3>Points</h3>
                        <input type="number" value={points} onChange={handlePointsChange} />
                    </div>
                )}
                <div className="section">
                    <h3>Level</h3>
                    <div className="stars">
                        {[...Array(points)].map((_, i) => (
                            <FaStar key={i} color="gold" />
                        ))}
                    </div>
                </div>
                <div className="section">
                    <h3>Social Media</h3>
                    <div className="social-media-links">
                        <a href="https://www.facebook.com" className="social-icon"><FaFacebook size={30} /></a>
                        <a href="https://www.twitter.com" className="social-icon"><FaTwitter size={30} /></a>
                        <a href="https://www.linkedin.com" className="social-icon"><FaLinkedin size={30} /></a>
                    </div>
                </div>
            </div>
            <div className="actions">
                {isEditing ? (
                    <button className="btn-save" onClick={handleSave}>Save</button>
                ) : (
                    <button className="btn-edit" onClick={handleEditToggle}>Edit</button>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
