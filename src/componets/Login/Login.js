import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating a successful login
        // Replace the code below with your own login logic
        if (email === 'malkotohuski@gmail.com' && password === '123321') {
            // Generate a token (replace with your token generation logic)
            const token = 'your_token_here';
            // Store the token in localStorage or sessionStorage
            localStorage.setItem('token', token);
            localStorage.setItem('email', email); // Store the email
            // Redirect to "/home" after successful login
            history('/');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Login</h1>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit" className="login-button">Login</button>
            <p>Don't have an account? <a href="/register">Sign up</a></p>
        </form>
    );
};

export default Login;
