import React from 'react';
import '../styles/styles.css';
import Navlinks from './navlinks';
import Mobilenavlinks from './mobilenavlinks';
import { Shield, Menu } from 'lucide-react';

const Navbar = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo">
            <Shield className="logo-icon" />
            <span className="logo-text">KINTARA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-only">
            <Navlinks />
            <div id="google_translate_element" className="translate-widget" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button"
            aria-label="Toggle menu"
          >
            <Menu className="menu-icon" />
          </button>
        </div>

        
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Mobilenavlinks />
            <div id="google_translate_element_mobile" className="translate-widget" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
