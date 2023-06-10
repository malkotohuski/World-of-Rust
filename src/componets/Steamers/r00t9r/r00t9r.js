import React from 'react';
import './r00t9r';
import r00t9rImage from '../../../images/root9r-image.jpg'
import { useNavigate } from 'react-router-dom';

function R00t9r() {
  const navigate = useNavigate();

  const handleAddComment = () => {
    // Handle adding a comment logic here
    // You can implement the functionality to add a comment
    // based on your requirements or use case.

    navigate('/r00t9r/comments');
    console.log('Add Comment clicked');
  };

  const handleAddVideo = () => {
    // Handle adding a comment logic here
    // You can implement the functionality to add a comment
    // based on your requirements or use case.
    navigate('/r00t9r/clips');
    console.log('Add Video clicked');

  };

  const handleBackToHomePage = () => {
    // Handle adding a comment logic here
    // You can implement the functionality to add a comment
    // based on your requirements or use case.

    navigate('/');
    console.log('Back button clicked');
};


  return (
    <div className='container'>
      <h1>r00t9r - Rust Streamer</h1>
      <p>Join r00t9r on thrilling Rust adventures and witness amazing gameplay in the world of Rust.</p>
      <div className="image-container">
        <img src={r00t9rImage} alt="r00t9r" />
      </div>
      <h2>About r00t9r</h2>
      <p>Qaixx is a dedicated Rust streamer known for his entertaining streams and engaging community. He has been streaming Rust for several years and enjoys interacting with his viewers.</p>
      <h2>Streaming Schedule</h2>
      <p>Qaixx streams Rust on the following schedule:</p>
      <ul>
        <li>Monday: 6 PM - 9 PM (EST)</li>
        <li>Wednesday: 6 PM - 9 PM (EST)</li>
        <li>Friday: 8 PM - 11 PM (EST)</li>
      </ul>
      <h2>Follow r00t9r</h2>
      <p>Make sure to follow Qaixx on his streaming platforms:</p>
      <ul>
        <li>Twitch: <a  className='twitchInfo' href="https://twitter.com/r00t9r" target="_blank" rel="noopener noreferrer">r00t9r</a></li>
        <li>Twitter: <a className='twitterInfo' href="https://m.twitch.tv/r00t9r" target="_blank" rel="noopener noreferrer">@r00t9r</a></li>
        <li>YouTube: <a className='youTubeInfo' href="https://www.youtube.com/r00t9rrust" target="_blank" rel="noopener noreferrer">r00t9r's YouTube Channel</a></li>
      </ul>
      <button className='button-comments' onClick={handleAddComment}>Comments</button>
      <button className='button-video' onClick={handleAddVideo}>Clips </button>
      <button className='button-video' onClick={handleBackToHomePage}>Back</button>
    </div>
  );
}

export default R00t9r;
