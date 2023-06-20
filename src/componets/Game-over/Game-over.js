import React, { useEffect, useState } from "react";
import "../Game-over/Game-over.css";

const Fireworks = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            createParticle();
        }, 200);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const createParticle = () => {
        const particle = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 3 + 1,
            xv: Math.random() * 3 - 1.5,
            yv: Math.random() * 3 - 1.5,
        };

        setParticles((prevState) => [...prevState, particle]);

        setTimeout(() => {
            setParticles((prevState) =>
                prevState.filter((p) => p !== particle)
            );
        }, 2000);
    };

    return (
        <div className="fireworks-container">
            <div className="center-text">Congratulations you survived !</div>
            {particles.map((particle, index) => (
                <div
                    key={index}
                    className="particle"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Fireworks;
