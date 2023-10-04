import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import "./About.css";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: 42.6977,
    lng: 23.3219,
};

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p>
                Welcome to our company! We are a team of passionate individuals
                dedicated to creating amazing products.
            </p>
            <ul>
                <li>
                    gmail:{" "}
                    <a
                        className="twitterInfo"
                        href="https://accounts.google.com/SignOutOptions?hl=bg&continue=https://mail.google.com&service=mail&ec=GBRAFw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @malkotohsuki@gmail.com
                    </a>
                </li>
            </ul>
            <div className="map-container">
                <LoadScript googleMapsApiKey="YOUR_API_KEY">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default AboutUs;
