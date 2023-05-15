import React from 'react';
import './Qaixx';
import qaixxImage from '../../../images/qaixx-image.jpg' 


function Qaixx() {
  return (
    <div>
      <h1>Qaixx - Rust Streamer</h1>
      <p>Join Qaixx on thrilling Rust adventures and witness amazing gameplay in the world of Rust.</p>
      <div className="image-container">
        <img src={qaixxImage} alt="Qaixx" />
      </div>
      <h2>About Qaixx</h2>
      <p>Qaixx is a dedicated Rust streamer known for his entertaining streams and engaging community. He has been streaming Rust for several years and enjoys interacting with his viewers.</p>
      <h2>Streaming Schedule</h2>
      <p>Qaixx streams Rust on the following schedule:</p>
      <ul>
        <li>Monday: 6 PM - 9 PM (EST)</li>
        <li>Wednesday: 6 PM - 9 PM (EST)</li>
        <li>Friday: 8 PM - 11 PM (EST)</li>
      </ul>
      <h2>Follow Qaixx</h2>
      <p>Make sure to follow Qaixx on his streaming platforms:</p>
      <ul>
        <li>Twitch: <a href="https://www.twitch.tv/qaixx" target="_blank" rel="noopener noreferrer">qaixx</a></li>
        <li>Twitter: <a href="https://twitter.com/qaixx" target="_blank" rel="noopener noreferrer">@qaixx</a></li>
        <li>YouTube: <a href="https://www.youtube.com/qaixx" target="_blank" rel="noopener noreferrer">Qaixx's YouTube Channel</a></li>
      </ul>
    </div>
  );
}

export default Qaixx;
