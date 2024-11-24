import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-info">
            <div className="footer-logo">
              <Shield className="footer-icon" />
              <span className="footer-brand">KINTARA</span>
            </div>
            <p className="footer-description">
              Empowering communities through blockchain technology
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-links-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/form" className="footer-link">Report Incident</Link>
              </li>
              <li>
                <Link to="/groups" className="footer-link">Support Groups</Link>
              </li>
              <li>
                <Link to="/kintara-coin" className="footer-link">Kintara Coin</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links">
            <h3 className="footer-links-title">Resources</h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/help" className="footer-link">Help Center</Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3 className="footer-contact-title">Contact</h3>
            <p className="footer-contact-email">support@kintara.com</p>
            <div className="footer-social-icons">
              <a href="#" className="footer-social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="footer-social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            &copy; {new Date().getFullYear()} Kintara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
