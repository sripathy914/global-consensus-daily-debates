
import React, { useState } from 'react';
import Header from '@/components/Header';
import './SubmitTopic.css';

const SubmitTopic = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    urgency: '',
    evidence: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Topic submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-container">
      <Header />
      <div className="submit-page">
        <div className="container">
          <div className="page-header">
            <h1>Submit a Global Decision Topic</h1>
            <p>Propose important issues that require global consensus and democratic decision-making</p>
          </div>
          
          <div className="submit-form-container">
            <form onSubmit={handleSubmit} className="submit-form">
              <div className="form-group">
                <label htmlFor="title">Decision Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Should [specific action] be implemented globally?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Detailed Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Explain the issue, its global impact, and why it needs democratic decision-making..."
                  rows={5}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="environment">Environment</option>
                    <option value="economics">Economics</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="technology">Technology</option>
                    <option value="human-rights">Human Rights</option>
                    <option value="labor">Labor & Work</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="urgency">Urgency Level *</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Urgency</option>
                    <option value="low">Low - Discussion within 30 days</option>
                    <option value="medium">Medium - Discussion within 7 days</option>
                    <option value="high">High - Discussion within 24 hours</option>
                    <option value="critical">Critical - Immediate discussion</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="evidence">Supporting Evidence & Sources</label>
                <textarea
                  id="evidence"
                  name="evidence"
                  value={formData.evidence}
                  onChange={handleChange}
                  placeholder="Provide links, studies, statistics, or other evidence supporting your topic..."
                  rows={3}
                />
              </div>

              <div className="guidelines">
                <h3>Submission Guidelines</h3>
                <ul>
                  <li>Topics must affect multiple countries or have global implications</li>
                  <li>Be specific and actionable in your proposal</li>
                  <li>Provide credible sources and evidence</li>
                  <li>Avoid duplicate topics - check past decisions first</li>
                  <li>Topics undergo community review before voting begins</li>
                </ul>
              </div>

              <button type="submit" className="submit-button">
                Submit Topic for Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitTopic;
