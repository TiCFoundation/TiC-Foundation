// src/components/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 
import ProfilePage from './profilePage';
import './Styles/login.css';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [flashMessage, setFlashMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      setFlashMessage({
        type: "success",
        message: "You have successfully logged in!"
      });
      setLoginData({
        email: '',
        password: ''
      });
      setIsSignUpSuccess(true);
    } catch (error) {
      setFlashMessage({ type: "error", message: error.message });
    }

    setTimeout(() => {
      setFlashMessage(null);
    }, 3000);
  };

  return (
    <div className="container2">
      {isSignUpSuccess ? (
        <ProfilePage 
          email={loginData.email} 
        />
      ) : (
        <div className="form-container">
          <h2>Login Here</h2>
          {flashMessage && (
            <div className={`flash-message ${flashMessage.type}`}>
              {flashMessage.message}
            </div>
          )}
          <div className="cover">
            <form onSubmit={handleLogin}>
              <div className="email-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email here"
                  onChange={handleChange}
                  value={loginData.email}
                />
              </div>
              <div className="password-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password here"
                  onChange={handleChange}
                  value={loginData.password}
                />
              </div>
              <div className="submit-container">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
