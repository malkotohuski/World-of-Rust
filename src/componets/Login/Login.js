import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const LoginFormKeys = {
    Email: "email",
    Password: "password",
};

const Login = () => {
    const { onLoginSubmit } = useContext(UserContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            [LoginFormKeys.Email]: "",
            [LoginFormKeys.Password]: "",
        },
        () => {
            onLoginSubmit();
            navigate("/");
        }
    );

    const navigate = useNavigate();

    /* const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate(); */

    /*  const handleEmailChange = (e) => {
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
    }; */

    return (
        <form onSubmit={onSubmit} className="login-form">
            <h1>Login</h1>
            <label>
                Email:
                <input
                    type="email"
                    name={LoginFormKeys.Email}
                    placeholder="devmasterstech@gmail.com@gmail.com"
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name={LoginFormKeys.Password}
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
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
