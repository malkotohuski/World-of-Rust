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
        const colors = [
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#ffff00",
            "#ff00ff",
            "#f999ff",
            "#ff99",
            "#f999",
            "#f9009f",
            "#9f99",
            "#6fff",
            "#88ff",
        ]; // Add more colors if desired

        const particle = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 15 + 5, // Adjust the size range as desired
            xv: Math.random() * 3 - 1.5,
            yv: Math.random() * 3 - 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
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
            <div className="center-text">Congratulations you survived</div>
            {particles.map((particle, index) => (
                <div
                    key={index}
                    className="particle"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Fireworks;
