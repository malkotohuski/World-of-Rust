import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

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

    if (newPassword !== confirmPassword) {
      setConfirmPasswordError('New password and confirm password do not match.');
    } else {
      setConfirmPasswordError(''); // Clear the error message if passwords match

      // Perform password reset logic here
      // Validate email, new password, and confirm password
      // If valid, update the password and redirect to the success page
      // Otherwise, display appropriate error messages

      // Assuming password reset is successful:
      setResetSuccess(true);
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="forgot-password-container">
      {resetSuccess ? (
        <div>
          <p className="success-message">Password reset. Please check your email.</p>
          <div className="centered-button">
            <Link to="/login" className="login-btn">Login</Link>
          </div>
        </div>
      ) : (
        <div>
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
              {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
            </div>
            <button type="submit" className="reset-password-button">Reset Password</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
