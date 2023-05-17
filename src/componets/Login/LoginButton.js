import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginButton() {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Extract the name from the email address
    const name = email.substring(0, email.indexOf("@"));

    // Redirect to the home page with the name as a parameter
    history.push(`/home?name=${encodeURIComponent(name)}`);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginButton;
