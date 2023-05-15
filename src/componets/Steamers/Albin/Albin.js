import React from 'react';
import './Albin.css';
import albbinImage from '../../../images/albin-image.jpg' 

function Albin() {
  return (
    <div className='container'>
      <h1>Albin - Rust Streamer</h1>
      <p>Join Albin's Rust adventures and experience the thrill of survival in a harsh world.</p>
      <div className="image-container">
        <img src={albbinImage} alt="Albin" />
      </div>
      <h2>About Albin</h2>
      <p>Albin is a skilled Rust streamer known for his strategic gameplay and engaging community. He has been streaming Rust for several years and loves to interact with his viewers.</p>
      <h2>Streaming Schedule</h2>
      <p>Albin streams Rust on the following schedule:</p>
      <ul>
        <li>Tuesday: 7 PM - 10 PM (EST)</li>
        <li>Thursday: 7 PM - 10 PM (EST)</li>
        <li>Saturday: 12 PM - 3 PM (EST)</li>
      </ul>
      <h2>Follow Albin</h2>
      <p>Make sure to follow Albin on his streaming platforms:</p>
      <ul>
        <li>Twitch: <a href="https://www.twitch.tv/albin" target="_blank" rel="noopener noreferrer">albin</a></li>
        <li>Twitter: <a href="https://twitter.com/albinrust" target="_blank" rel="noopener noreferrer">@albin</a></li>
        <li>YouTube: <a href="https://www.youtube.com/@albin8819" target="_blank" rel="noopener noreferrer">Albin's YouTube Channel</a></li>
      </ul>
    </div>
  );
}

export default Albin;
