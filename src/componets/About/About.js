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
                    <a
                        className="emailInfo"
                        href="https://accounts.google.com/SignOutOptions?hl=bg&continue=https://mail.google.com&service=mail&ec=GBRAFw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      email: malkotohuski@gmail.com
                    </a>
                </li>
                <li>
                    <a
                        className="facebookInfo"
                        href="https://www.facebook.com/profile.php?id=100065511013115"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      facebook: Daniel Dimitrov
                    </a>
                </li>
                <li>
                    <a
                        className="youtubeInfo"
                        href="https://www.youtube.com/channel/UCfwAV2IrgFXdh_Gqt-piq2A"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      youtube: Daniel Dimitrov
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
