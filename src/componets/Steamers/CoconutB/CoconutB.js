import React from 'react';
import './CoconutB.css';
import CoconutBImage from '../../../images/coconutB-image.jpg';
import { useNavigate } from 'react-router-dom';

function CoconutB() {
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

    const handleBackToHomePage = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.

        navigate('/');
        console.log('Back button clicked');
    };

    return (
        <div className="container">
            <h1>CoconutB - Rust Streamer</h1>
            <p>Welcome to the world of CoconutB! Watch the exciting Rust adventures and gameplay live on stream.</p>
            <div className="image-container">
                <img src={CoconutBImage} alt="CoconutB" />
            </div>
            <h2>About CoconutB</h2>
            <p>CoconutB is a passionate Rust streamer known for his skilled gameplay and entertaining commentary. He has been streaming Rust for several years and has built a dedicated community of viewers.</p>
            <h2>Streaming Schedule</h2>
            <p>CoconutB streams Rust on the following schedule:</p>
            <ul>
                <li>Monday: 8 PM - 11 PM (EST)</li>
                <li>Wednesday: 8 PM - 11 PM (EST)</li>
                <li>Friday: 8 PM - 12 AM (EST)</li>
                <li>Sunday: 2 PM - 6 PM (EST)</li>
            </ul>
            <h2>Follow CoconutB</h2>
            <p>Make sure to follow CoconutB on his streaming platforms:</p>
            <ul>
                <li>Twitch: <a className='twitchInfo' href="https://www.twitch.tv/coconutb" target="_blank" rel="noopener noreferrer">CoconutB</a></li>
                <li>Twitter: <a className='twitterInfo' href="https://twitter.com/CoconutBGaming" target="_blank" rel="noopener noreferrer">@CoconutB</a></li>
                <li>YouTube: <a className='youTubeInfo' href="https://www.youtube.com/channel/UCnO8ScddtnOC0h--6_lbIUw?view_as=subscriber" target="_blank" rel="noopener noreferrer">CoconutB's YouTube Channel</a></li>
            </ul>
            <button className='button-comments' onClick={handleAddComment}>Comments</button>
            <button className='button-video' onClick={handleAddVideo}>Clips </button>
            <button className='button-video' onClick={handleBackToHomePage}>Back</button>
        </div>
    );
}

export default CoconutB;
