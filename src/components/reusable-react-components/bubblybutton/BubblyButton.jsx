import React, { useState } from 'react';
import './BubblyButton.css';

export function BubblyButton({
                                 onClick,
                                 children = "LO QUIERO",
                                 className = "",
                                 color = "#DA4B96",
                             }) {
    const [isGlowing, setIsGlowing] = useState(false);

    const handleClick = () => {
        setIsGlowing(true);
        setTimeout(() => setIsGlowing(false), 600);
        if (onClick) onClick();
    };

    return (
        <button
            className={`bubbly-button ${className} ${isGlowing ? 'glowing' : ''}`}
            onClick={handleClick}
        >
            <svg width="100%" height="100%" viewBox="-20 5 240 90" className="bubbles-svg">
                <style>{`
          .bubbles-button circle:nth-child(1) { transform-origin: 20px 50px; }
          .bubbles-button circle:nth-child(2) { transform-origin: 60px 60px; }
          .bubbles-button circle:nth-child(3) { transform-origin: 100px 50px; }
          .bubbles-button circle:nth-child(4) { transform-origin: 140px 60px; }
          .bubbles-button circle:nth-child(5) { transform-origin: 180px 50px; }

          @keyframes waveBounce {
            0% { transform: scale(1) translateY(0); }
            15% { transform: scale(1.3) translateY(-15px); }
            30% { transform: scale(0.9) translateY(5px); }
            50% { transform: scale(1.1) translateY(-5px); }
            70% { transform: scale(0.95) translateY(2px); }
            100% { transform: scale(1) translateY(0); }
          }

          .bubbles-button circle {
            animation-play-state: paused;
            transform-origin: center center;
          }

          .bubbles-button circle:nth-child(1) { animation-delay: 0.0s; }
          .bubbles-button circle:nth-child(2) { animation-delay: 0.12s; }
          .bubbles-button circle:nth-child(3) { animation-delay: 0.24s; }
          .bubbles-button circle:nth-child(4) { animation-delay: 0.36s; }
          .bubbles-button circle:nth-child(5) { animation-delay: 0.48s; }

          .bubbly-button:hover .bubbles-button circle {
            animation: waveBounce 0.8s ease-in-out 1 forwards;
            animation-play-state: running;
          }
        `}</style>
                <g className="bubbles-button">
                    <circle fill={color} r="35" cx="20" cy="50" />
                    <circle fill={color} r="35" cx="60" cy="60" />
                    <circle fill={color} r="40" cx="100" cy="50" />
                    <circle fill={color} r="35" cx="140" cy="60" />
                    <circle fill={color} r="35" cx="180" cy="50" />
                </g>
            </svg>
            <span className="bubbly-text">{children}</span>
        </button>
    );
}