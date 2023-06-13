import React from "react";
import { useNavigate } from "react-router-dom";
import '../Servers/ServersUS.css';

function ServersUS() {
    const navigate = useNavigate();

    const handleVanilla = () => {
        navigate('/serversUS/vanillaUS');
        console.log('Welcome to vanilla!');
    };

    const handleModdedEU = () => {
        navigate('/serversUS/ModdedUS');
        console.log('Welcome to modded!');
    };

    const handleTraining = () => {
        navigate('/serversUS/training');
    };

    return (
        <section>
            <div className="container-servers">
                <h1>Top US Servers</h1>
                <button className='button-vanilla' onClick={handleVanilla}>Vanilla</button>
                <button className='button-modded' onClick={handleModdedEU}>Modded</button>
                <button className='button-training' onClick={handleTraining}>Training</button>
            </div>
            <div className="video-container">
                <iframe
                    width="920"
                    height="560"
                    src="https://www.youtube.com/embed/LGcECozNXEw"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}

export default ServersUS;
