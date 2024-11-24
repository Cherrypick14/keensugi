import React from "react";
import '../styles/donation.css';

const Donation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donation submitted!");
  };

  return (
    <section className="donation-page">
      <h1 className="section-title">Make a Difference</h1>
      <div className="donation-grid">
        <div className="donation-info">
          <h2>Your Support Matters</h2>
          <p>Your donation helps us provide essential services to survivors of gender-based violence across Kenya.</p>
          <ul className="impact-list">
            <li><i className="fas fa-home"></i> Provide safe shelter for survivors</li>
            <li><i className="fas fa-hand-holding-medical"></i> Fund medical and psychological support</li>
            <li><i className="fas fa-gavel"></i> Offer legal aid and advocacy</li>
            <li><i className="fas fa-graduation-cap"></i> Support education programs</li>
          </ul>
          <p>Together, we can create a safer society for all.</p>
        </div>
        <div className="donation-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select Amount</label>
              <div className="amount-options">
                <div className="amount-option" data-amount="1000">KES 1,000</div>
                <div className="amount-option" data-amount="5000">KES 5,000</div>
                <div className="amount-option" data-amount="10000">KES 10,000</div>
              </div>
              <input type="number" name="custom-amount" placeholder="Custom Amount" />
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select name="payment-method" required>
                <option value="">Select Payment Method</option>
                <option value="mpesa">M-PESA</option>
                <option value="card">Credit/Debit Card</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Donate Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Donation;
