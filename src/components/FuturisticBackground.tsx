
import React from 'react';
import './FuturisticBackground.css';

const FuturisticBackground = () => {
  return (
    <div className="futuristic-background">
      <div className="stars"></div>
      <div className="nebula"></div>
      <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default FuturisticBackground;
