import React from 'react';
import './NotFound.css';
import errorImage from '../../images/404NotFound.png';

function NotFound() {
    return (
      <div className="container">
        <h1>404 Not Found</h1>
        <img src={errorImage} alt="Error" />
        <p>Oops! The page you're looking for does not exist.</p>
      </div>
    );
  }
  

  export default NotFound;