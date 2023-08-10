import React from "react";
import "./Riqqeloff.css";
import RiqqeloffImage from "../../../images/riqqeloff-image.jpg";
import { useNavigate } from "react-router-dom";

function Riqqeloff() {
    const navigate = useNavigate();

    const handleAddComment = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.

        navigate("/riqqeloff/comments");
        console.log("Add Comment clicked");
    };

    const handleAddVideo = () => {
        // Handle adding a comment logic here
        // You can implement the functionality to add a comment
        // based on your requirements or use case.
        navigate("/riqqeloff/clips");
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
            <h1>Riqqeloff - Rust Streamer</h1>
            <p>
                Join Riqqeloff on thrilling Rust adventures and witness amazing
                gameplay in the world of Rust.
            </p>
            <div className="image-container">
                <img src={RiqqeloffImage} alt="Riqqeloff" />
            </div>
            <h2>About Riqqeloff</h2>
            <p>
                Riqqeloff is a dedicated Rust streamer known for his
                entertaining streams and engaging community. He has been
                streaming Rust for several years and enjoys interacting with his
                viewers.
            </p>
            <h2>Streaming Schedule</h2>
            <p>Riqqeloff streams Rust on the following schedule:</p>
            <ul>
                <li>Monday: 6 PM - 9 PM (EST)</li>
                <li>Wednesday: 6 PM - 9 PM (EST)</li>
                <li>Friday: 8 PM - 11 PM (EST)</li>
            </ul>
            <h2>Follow Riqqeloff</h2>
            <p>Make sure to follow Riqqeloff on his streaming platforms:</p>
            <ul>
                <li>
                    Twitch:{" "}
                    <a
                        className="twitchInfo"
                        href="https://twitter.com/riqqeloff"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Riqqeloff
                    </a>
                </li>
                <li>
                    Twitter:{" "}
                    <a
                        className="twitterInfo"
                        href="https://m.twitch.tv/riqqeloff"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @Riqqeloff
                    </a>
                </li>
                <li>
                    YouTube:{" "}
                    <a
                        className="youTubeInfo"
                        href="https://www.youtube.com/riqqeloff"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Riqqeloff's YouTube Channel
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

export default Riqqeloff;
