import React from 'react';
import './Trausi.css';
import trausiImage from '../../../images/trausi-image.jpg'; // Replace with the actual path to your Trausi image file

function Trausi() {
  return (
    <div className="container">
      <section className="container">
        <h1>Trausi - Rust Streamer</h1>
        <p>Welcome to the world of Trausi! Join him on thrilling Rust adventures and witness epic gameplay.</p>
      </section>
      <section className="content">
        <div className="image-container">
          <img src={trausiImage} alt="Trausi" />
        </div>
        <div className="about">
          <h2>About Trausi</h2>
          <p>Trausi is a renowned Rust streamer known for his skilled gameplay and engaging community. He has been streaming Rust for several years and has gained a dedicated following.</p>
        </div>
        <div className="schedule">
          <h2>Streaming Schedule</h2>
          <p>Trausi streams Rust on the following schedule:</p>
          <ul>
            <li>Monday: 7 PM - 10 PM (EST)</li>
            <li>Wednesday: 7 PM - 10 PM (EST)</li>
            <li>Friday: 8 PM - 11 PM (EST)</li>
            <li>Sunday: 2 PM - 5 PM (EST)</li>
          </ul>
        </div>
        <div className="follow">
          <h2>Follow Trausi</h2>
          <p>Make sure to follow Trausi on his streaming platforms:</p>
          <ul>
            <li>Twitch: <a href="https://www.twitch.tv/trausi" target="_blank" rel="noopener noreferrer">trausi</a></li>
            <li>Twitter: <a href="https://twitter.com/trausi" target="_blank" rel="noopener noreferrer">@trausi</a></li>
            <li>YouTube: <a href="https://www.youtube.com/trausi" target="_blank" rel="noopener noreferrer">Trausi's YouTube Channel</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Trausi;
