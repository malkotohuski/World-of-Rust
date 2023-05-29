import React from 'react';
import './Deathwingua.css';
import DeathwinguaImage from '../../../images/deathwingua-image.jpg';
import { useNavigate } from 'react-router-dom';

function Deathwingua() {
    const navigate = useNavigate();

    const handleAddComment = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.

        navigate('/deathwingua/comments');
        console.log('Add Comment clicked');
    };

    const handleAddVideo = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.

        navigate('/deathwingua/clips')
        console.log('Add Video clicked');
    };

    return (
        <div className="container">
            <h1>Deathwingua - Rust Streamer</h1>
            <p>Welcome to the world of Deathwingua! Watch the exciting Rust adventures and gameplay live on stream.</p>
            <div className="image-container">
                <img src={DeathwinguaImage} alt="Deathwingua" />
            </div>
            <h2>About Deathwingua</h2>
            <p>Deathwingua is a passionate Rust streamer known for his skilled gameplay and entertaining commentary. He has been streaming Rust for several years and has built a dedicated community of viewers.</p>
            <h2>Streaming Schedule</h2>
            <p>Deathwingua streams Rust on the following schedule:</p>
            <ul>
                <li>Monday: 8 PM - 11 PM (EST)</li>
                <li>Wednesday: 8 PM - 11 PM (EST)</li>
                <li>Friday: 8 PM - 12 AM (EST)</li>
                <li>Sunday: 2 PM - 6 PM (EST)</li>
            </ul>
            <h2>Follow Deathwingua</h2>
            <p>Make sure to follow Deathwing on his streaming platforms:</p>
            <ul>
                <li>Twitch: <a href="https://www.twitch.tv/deathwingua" target="_blank" rel="noopener noreferrer">Deathwingua</a></li>
                <li>Twitter: <a href="https://twitter.com/deathwingua" target="_blank" rel="noopener noreferrer">@Deathwingua</a></li>
                <li>YouTube: <a href="https://www.youtube.com/deathwingua" target="_blank" rel="noopener noreferrer">Deathwing's YouTube Channel</a></li>
            </ul>
            <button onClick={handleAddComment}>Comments</button>
            <button onClick={handleAddVideo}>Clips </button>
        </div>
    );
}

export default Deathwingua;
