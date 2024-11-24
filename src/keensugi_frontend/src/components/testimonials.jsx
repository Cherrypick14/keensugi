import React from 'react';
import '../styles/styles.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Kintara gave me the courage to speak up and seek help. Their support changed my life.",
      author: "Sarah K."
    },
    {
      text: "The platform's anonymous reporting feature helped me feel safe while seeking support.",
      author: "James M."
    },
    {
      text: "As a community leader, I've seen how Kintara has transformed lives in our area.",
      author: "Elizabeth W."
    },
    {
      text: "The blockchain technology ensures our data is secure and transparent. It's revolutionary!",
      author: "John D."
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          Voices of Impact
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <cite className="testimonial-author">- {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
