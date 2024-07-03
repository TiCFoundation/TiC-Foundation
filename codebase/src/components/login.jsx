// src/components/Login.js
import React, { useState } from 'react';
import './Styles/login.css';
import ProfilePage from './profilePage';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleImageUpload = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleLogin = () => {
        // Perform login validation (e.g., check credentials with backend)
        // If login successful, set isLoggedIn to true
        setIsLoggedIn(true);
    };

    return (
        <div className="login-container">
            {!isLoggedIn ? (
                <div className="login-form">
                    <h1>Login</h1>
                    <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    <input type="file" onChange={handleImageUpload} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <ProfilePage name={name} email={email} image={image} />
            )}
        </div>
    );
}

export default Login;
