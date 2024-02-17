// ProfilePage.js
import React, { useState } from 'react';
import './Styles/profile.css';

function ProfilePage({ name, email, image }) {
    const [skills, setSkills] = useState([]);
    const [points, setPoints] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    const handleSkillsChange = (event) => {
        setSkills(event.target.value.split(','));
    };

    const handlePointsChange = (event) => {
        setPoints(parseInt(event.target.value));
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        // Save user information (e.g., skills, points) to backend
        // Display success message or handle errors
        setIsEditing(false);
    };

    return (
        <div className='profile'>
            <h1>Profile</h1>
            <div className="profile-info">
                <img className="profilepic" src={image} alt="Profile" />
                <div className="user-info">
                    <div>Name: {name}</div>
                    <div>Email: {email}</div>
                    <label>Skills:</label>
                    {isEditing ? (
                        <input type="text" placeholder="Skills (comma-separated)" value={skills.join(',')} onChange={handleSkillsChange} />
                    ) : (
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    )}
                    {isEditing && (
                        <div>
                            <label>Points:</label>
                            <input type="number" value={points} onChange={handlePointsChange} />
                        </div>
                    )}
                </div>
            </div>
            <div className="actions">
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={handleEditToggle}>Edit</button>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
