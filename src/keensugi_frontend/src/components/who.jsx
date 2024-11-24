import React from 'react';
import '../styles/styles.css';
import { 
  Shield, Heart, Scale 
} from 'lucide-react';

const Who = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "Built on blockchain for complete transparency and security"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Supporting survivors with dignity and understanding"
    },
    {
      icon: Scale,
      title: "Justice",
      description: "Working towards accountability and prevention"
    }
  ];

  return (
    <section className="who-section">
      <div className="who-container">
        <h2 className="who-title">
          Who We Are
        </h2>
        <div className="who-values-grid">
          {values.map((value, index) => (
            <div 
              key={index}
              className="who-value-card"
            >
              <value.icon className="who-icon" />
              <h3 className="who-value-title">{value.title}</h3>
              <p className="who-value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Who;
