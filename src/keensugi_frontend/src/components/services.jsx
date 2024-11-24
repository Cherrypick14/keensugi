import React from 'react';
import '../styles/styles.css';
import { 
  Phone, HandHeart, Scale, ChartLine 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock assistance and crisis intervention"
    },
    {
      icon: HandHeart,
      title: "Community Support",
      description: "Local support groups and counseling services"
    },
    {
      icon: Scale,
      title: "Legal Aid",
      description: "Access to legal resources and advocacy"
    },
    {
      icon: ChartLine,
      title: "Data Insights",
      description: "Research and analytics to inform prevention"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">
          What We Do
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="services-card">
              <service.icon className="services-icon" />
              <h3 className="services-card-title">{service.title}</h3>
              <p className="services-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
