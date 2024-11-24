import React from 'react';
import '../styles/styles.css';

const Mobilenavlinks = () => {
  return (
    <>
      <a href="/home" className="mobile-nav-link">Home</a>
      <a href="/statistics" className="mobile-nav-link">Statistics</a>
      <a href="/kintara-coin" className="mobile-nav-link">Kintara Coin</a>
      <button className="mobile-login-button">Login</button>
      <button className="mobile-donate-button">Donate</button>
    </>
  );
}

export default Mobilenavlinks;
