import React from 'react';
import '../styles/styles.css';
import { 
    Gavel, HandHeart, BarChart3, Coins
} from 'lucide-react';

const Quickresource = () => {
  const resources = [
    {
      icon: Gavel,
      title: "Know Your Rights",
      description: "Learn about legal protections",
      link: "/rights"
    },
    {
      icon: HandHeart,
      title: "Donate",
      description: "Support our cause",
      link: "/donation" // Updated link for donation
    },
    {
      icon: BarChart3,
      title: "Statistics",
      description: "View impact data",
      link: "/statistics" // Updated link for statistics
    },
    {
      icon: Coins,
      title: "Kintara Coin",
      description: "Learn about our token",
      link: "/kintara-coin"
    }
  ];

  return (
    <section className="quickresource-section">
      <div className="quickresource-container">
        <h2 className="quickresource-title">
          Quick Resources
        </h2>
        <div className="quickresource-grid">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="quickresource-card"
            >
              <resource.icon className="quickresource-icon" />
              <h4 className="quickresource-card-title">{resource.title}</h4>
              <p className="quickresource-description">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Quickresource;
