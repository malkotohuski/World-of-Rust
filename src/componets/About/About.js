import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import './About.css';

const containerStyle = {
  width: '100%',
  height: '400px',
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
        Welcome to our company! We are a team of passionate individuals dedicated to creating amazing products.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis in libero viverra tincidunt at sit amet justo.
        Suspendisse a suscipit elit. Donec facilisis felis ac velit laoreet, id auctor leo ullamcorper.
      </p>
      <p>
        Phasellus nec malesuada lectus. Nullam bibendum efficitur ex, non sagittis leo laoreet at.
        Fusce eu diam sit amet ante vulputate interdum ut vitae leo. Integer nec libero tellus.
      </p>
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
