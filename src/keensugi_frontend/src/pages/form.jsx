import React, { useState } from 'react';
import '../styles/form.css';


const Form = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    
    const incidentType = e.target.incidentType.value;
    const description = e.target.description.value;
    const date = e.target.date.value;
    const location = e.target.location.value;
    const evidenceFiles = e.target.evidence.files;

    // Validation
    if (!incidentType || !description || !date || !location) {
      alert('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // File size validation
    const maxSize = 10 * 1024 * 1024; // 10MB
    for (let file of evidenceFiles) {
      if (file.size > maxSize) {
        alert(`File "${file.name}" exceeds 10MB limit`);
        setLoading(false);
        return;
      }
      
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        alert(`File "${file.name}" is not of an accepted type`);
        setLoading(false);
        return;
      }
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Report submitted successfully. Thank you for helping make our community safer.');
      e.target.reset();
    } catch (error) {
      alert('An error occurred while submitting the report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="report">
      <h2 className="section-title">Submit Incident Report</h2>
      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="incidentType">Incident Type</label>
          <select id="incidentType" required>
            <option value="">Select Incident Type</option>
            <option value="physical">Physical Violence</option>
            <option value="sexual">Sexual Violence</option>
            <option value="emotional">Emotional/Psychological Abuse</option>
            <option value="economic">Economic Abuse</option>
            <option value="cyber">Cyber Harassment</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea 
            id="description" 
            required 
            placeholder="Please provide detailed information about the incident"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date of Incident</label>
          <input type="date" id="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location Level</label>
          <select id="location" required>
            <option value="">Select Location Level</option>
            <option value="home">Home</option>
            <option value="workplace">Workplace</option>
            <option value="public">Public Space</option>
            <option value="educational">Educational Institution</option>
            <option value="online">Online/Digital Space</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="evidence">Upload Evidence (Optional)</label>
          <input 
            type="file" 
            id="evidence" 
            multiple 
            accept="image/*,video/*,.pdf,.doc,.docx" 
          />
          <small className="file-hint">
            Accepted formats: Images, Videos, PDF, DOC files (Max size: 10MB)
          </small>
        </div>

        <button type="submit" className="cta-button">Submit Report</button>
      </form>
      <div className={`loading ${loading ? 'active' : ''}`}>
        Submitting report...
      </div>
    </section>
  );
};

export default Form;
