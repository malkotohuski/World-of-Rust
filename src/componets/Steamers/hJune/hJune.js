import React from 'react';
import './hJune.css';
import hJuneImage from '../../../images/hjune-image.jpg';
import { useNavigate } from 'react-router-dom';

function HJune() {
    const navigate = useNavigate();

    const handleAddComment = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.

        navigate('/hJune/comments');
        console.log('Add Comment clicked');
    };

    const handleAddVideo = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.

        navigate('/hJune/clips')
        console.log('Add Video clicked');
    };
    return (
        <div className='container'>
            <h1>hJune - Rust Streamer</h1>
            <p>Join hJune's Rust adventures and experience the thrill of survival in a harsh world.</p>
            <div className="image-container">
                <img src={hJuneImage} alt="hJune" />
            </div>
            <h2>About hJune</h2>
            <p>hJune is a skilled Rust streamer known for his strategic gameplay and engaging community. He has been streaming Rust for several years and loves to interact with his viewers.</p>
            <h2>Streaming Schedule</h2>
            <p>hJune streams Rust on the following schedule:</p>
            <ul>
                <li>Tuesday: 7 PM - 10 PM (EST)</li>
                <li>Thursday: 7 PM - 10 PM (EST)</li>
                <li>Saturday: 12 PM - 3 PM (EST)</li>
            </ul>
            <h2>Follow Albin</h2>
            <p>Make sure to follow Albin on his streaming platforms:</p>
            <ul>
                <li>Twitch: <a href="https://www.twitch.tv/hjune" target="_blank" rel="noopener noreferrer">hJune</a></li>
                <li>Twitter: <a href="https://twitter.com/h7une" target="_blank" rel="noopener noreferrer">@hJune</a></li>
                <li>YouTube: <a href="https://www.youtube.com/c/hJune" target="_blank" rel="noopener noreferrer">hJune's YouTube Channel</a></li>
            </ul>
            <button className='button-comments' onClick={handleAddComment}>Comments</button>
            <button className='button-video' onClick={handleAddVideo}>Clips </button>
        </div>
    );
}

export default HJune;
