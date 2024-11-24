import React from 'react';
import '../styles/styles.css';
import { 
  Shield, Globe, HandHeart 
} from 'lucide-react';

const Whychoose = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Anonymous",
      description: "Blockchain-powered security ensures your privacy"
    },
    {
      icon: Globe,
      title: "Nationwide Network",
      description: "Connected support across all 47 counties"
    },
    {
      icon: HandHeart,
      title: "Community-Driven",
      description: "Built by and for the community"
    }
  ];

  return (
    <section className="whychoose-section">
      <div className="whychoose-container">
        <h2 className="whychoose-title">
          Why Choose Kintara
        </h2>
        <div className="whychoose-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="whychoose-feature-card"
            >
              <feature.icon className="whychoose-icon" />
              <h3 className="whychoose-feature-title">{feature.title}</h3>
              <p className="whychoose-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Whychoose;
