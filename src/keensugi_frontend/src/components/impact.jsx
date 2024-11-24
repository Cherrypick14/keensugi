import React from 'react';
import '../styles/styles.css';

const Impact = () => {
  const stats = [
    { value: "10,000+", label: "Lives Touched" },
    { value: "47", label: "Counties Reached" },
    { value: "95%", label: "Case Resolution" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="impact-section">
      <div className="impact-container">
        <h2 className="impact-title">
          Our Impact
        </h2>
        <div className="impact-grid">
          {stats.map((stat, index) => (
            <div key={index} className="impact-card">
              <h3 className="impact-value">{stat.value}</h3>
              <p className="impact-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
