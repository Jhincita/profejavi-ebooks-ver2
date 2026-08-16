import React, { useState } from 'react';
import './GlowyInput.css';

export function GlowyInput({
                               value,
                               onChange,
                               placeholder = "Escribe aquí...",
                               type = "text",
                               disabled = false,
                               className = "",
                               glowIntensity = "medium",
                               glowSpeed = "normal", // slow, normal, fast
                           }) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const isGlowing = isHovered || isFocused;

    const speedMap = {
        slow: '8s',
        normal: '4s',
        fast: '2s',
    };

    return (
        <div
            className={`glowy-input-wrapper ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="glowy-input-container">
                <div
                    className={`glowy-input-glow ${isGlowing ? 'visible' : ''}`}
                    style={{
                        animationDuration: speedMap[glowSpeed],
                        opacity: glowIntensity === 'low' ? 0.5 : glowIntensity === 'medium' ? 0.7 : 1,
                    }}
                />
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`glowy-input ${isGlowing ? 'glowy-input-active' : ''}`}
                    onChange={(e) => onChange?.(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
        </div>
    );
}