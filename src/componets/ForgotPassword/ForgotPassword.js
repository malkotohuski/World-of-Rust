import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform password reset logic here
    // Validate email, new password, and confirm password
    // If valid, update the password and redirect to the success page
    // Otherwise, display appropriate error messages
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input type="password" value={newPassword} onChange={handleNewPasswordChange} />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button type="submit" className="reset-password-button">Reset Password</button>
      </form>
      <h3 className='text-white'>Remember your password?</h3>
      <p>
      <Link className="text-login" to="/login">Log in</Link>
      </p> 
    </div>
  );
};

export default ForgotPassword;
