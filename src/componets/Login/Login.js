import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const history = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate a successful login without checking email and password
        // Replace the code below with your own login logic
        const token = "your_token_here";

        // Store the token in localStorage or sessionStorage
        localStorage.setItem("token", token);

        // Store the email (you can store any email you want since it won't be checked)
        localStorage.setItem("email", email);

        // Redirect to "/home" after successful login
        history("/");
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Login</h1>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </label>
            <div className="forgot-password">
                <Link to="/forgot-password">Forgot password</Link>
            </div>
            <button type="submit" className="login-button">
                Login
            </button>
            <p>
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>
        </form>
    );
};

export default Login;
