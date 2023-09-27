import React from "react";
import "./Dyanna.css";
import DyannaImage from "../../../images/dyanna-image.png";
import { useNavigate } from "react-router-dom";

function Dyanna() {
    const navigate = useNavigate();

    const handleAddComment = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.

        navigate("/dyanna/comments");
        console.log("Add Comment clicked");
    };

    const handleAddVideo = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.
        navigate("/dyanna/clips");
        console.log("Add Video clicked");
    };

    const handleBackToHomePage = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.

        navigate("/");
        console.log("Back button clicked");
    };

    return (
        <div className="container">
            <h1>Dyanna - Rust Streamer</h1>
            <p>
                Join Dyanna on thrilling Rust adventures and witness amazing
                gameplay in the world of Rust.
            </p>
            <div className="image-container">
                <img src={DyannaImage} alt="Dyanna" />
            </div>
            <h2>About Dyanna</h2>
            <p>
                Dyanna is a dedicated Rust streamer known for his entertaining
                streams and engaging community. He has been streaming Rust for
                several years and enjoys interacting with his viewers.
            </p>
            <p>Game time : 11k hours</p>
            <h2>Streaming Schedule</h2>
            <p>Dyanna streams Rust on the following schedule:</p>
            <ul>
                <li>Monday: 6 PM - 9 PM (EST)</li>
                <li>Wednesday: 6 PM - 9 PM (EST)</li>
                <li>Friday: 8 PM - 11 PM (EST)</li>
            </ul>
            <h2>Follow Dyanna</h2>
            <p>Make sure to follow Dyanna on his streaming platforms:</p>
            <ul>
                <li>
                    Twitch:{" "}
                    <a
                        className="twitchInfo"
                        href="https://www.twitch.tv/dyanna"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dyanna
                    </a>
                </li>
                <li>
                    Twitter:{" "}
                    <a
                        className="twitterInfo"
                        href="https://twitter.com/dyannatv?lang=bg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @Dyanna
                    </a>
                </li>
                <li>
                    YouTube:{" "}
                    <a
                        className="youTubeInfo"
                        href="https://www.youtube.com/channel/UC9onRl3dAzouXRA0FfgpuQw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dyanna's YouTube Channel
                    </a>
                </li>
            </ul>
            <button className="button-comments" onClick={handleAddComment}>
                Comments
            </button>
            <button className="button-video" onClick={handleAddVideo}>
                Clips{" "}
            </button>
            <button className="button-video" onClick={handleBackToHomePage}>
                Back
            </button>
        </div>
    );
}

export default Dyanna;
