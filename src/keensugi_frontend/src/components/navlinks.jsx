import React from 'react';
import '../styles/styles.css';

const Navlinks = () => {
  return (
    <>
      <a href="/home" className="nav-link hover-text-purple">Home</a>
      <a href="/statistics" className="nav-link hover-text-purple">Statistics</a>
      <a href="/kintara-coin" className="nav-link hover-text-purple">Kintara Coin</a>
      <button className="login-button">Login</button>
      <button className="donate-button">Donate</button>
    </>
  );
}

export default Navlinks;
