import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Fighting Gender-Based Violence Together
          </h1>
          <p className="hero-description">
            Empowering communities through technology and support to create a safer society for all.
          </p>
          <Link to="/form" className="hero-button">
            Report an Incident
            <ChevronRight className="hero-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
