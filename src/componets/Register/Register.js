import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { onRegisterSubmit } = useContext(UserContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            email: "",
            password: "",
            name: "",
        },
        onRegisterSubmit
    );
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save registration data to localStorage
        const token = "your_token_here";

        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Redirect to "/"
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h1>Register</h1>
            <label>
                Name:
                <input
                    type="text"
                    value={values.name}
                    onChange={changeHandler}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={values.email}
                    onChange={changeHandler}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={values.password}
                    onChange={changeHandler}
                />
            </label>
            <button type="submit" className="register-button">
                Register
            </button>
            <p>
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </form>
    );
};

export default Register;
