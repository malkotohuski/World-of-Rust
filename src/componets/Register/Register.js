import React from "react";
import "./Register.css";
import { Link } from "react-router-dom"; // Import withRouter
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterFromKeys = {
    Name: "name",
    Email: "email",
    Password: "password", // Fixed the typo in the password field
};

const Register = () => {
    const { onRegisterSubmit } = useContext(UserContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            [RegisterFromKeys.Name]: "",
            [RegisterFromKeys.Email]: "",
            [RegisterFromKeys.Password]: "",
        },
        () => {
            onRegisterSubmit();
            navigate("/"); // Use props.history to redirect to /home
        }
    );

    const navigate = useNavigate();

    return (
        <form onSubmit={onSubmit} className="register-form">
            <h1>Register</h1>
            <label>
                Name:
                <input
                    type="text"
                    name={RegisterFromKeys.Name}
                    placeholder="Shushkata"
                    value={values[RegisterFromKeys.Name]}
                    onChange={changeHandler}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name={RegisterFromKeys.Email}
                    placeholder="devmasterstech@gmail.com@gmail.com"
                    value={values[RegisterFromKeys.Email]}
                    onChange={changeHandler}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name={RegisterFromKeys.Password}
                    placeholder="123456"
                    value={values[RegisterFromKeys.Password]}
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

export default (Register); // Wrap the component with withRouter
