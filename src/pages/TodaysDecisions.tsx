
import React from 'react';
import Header from '@/components/Header';
import './TodaysDecisions.css';

const TodaysDecisions = () => {
  const decisions = [
    {
      id: 1,
      title: "Should plastic bags be banned globally by 2025?",
      description: "Environmental impact vs economic concerns in developing nations",
      category: "Environment",
      deadline: "23:45:12",
      votes: 45621,
      yesPercent: 78
    },
    {
      id: 2,
      title: "Implement 4-day work week worldwide?",
      description: "Productivity studies show mixed results across different industries",
      category: "Labor",
      deadline: "18:22:45",
      votes: 32140,
      yesPercent: 65
    },
    {
      id: 3,
      title: "Universal healthcare as a human right?",
      description: "Funding mechanisms and implementation challenges globally",
      category: "Healthcare",
      deadline: "12:15:33",
      votes: 67890,
      yesPercent: 82
    }
  ];

  return (
    <div className="page-container">
      <Header />
      <div className="decisions-page">
        <div className="container">
          <div className="page-header">
            <h1>Today's Global Decisions</h1>
            <p>Active decisions requiring your input before midnight UTC</p>
          </div>
          
          <div className="decisions-grid">
            {decisions.map((decision) => (
              <div key={decision.id} className="decision-card">
                <div className="decision-header">
                  <span className="category-badge">{decision.category}</span>
                  <div className="countdown">⏰ {decision.deadline}</div>
                </div>
                <h3 className="decision-title">{decision.title}</h3>
                <p className="decision-description">{decision.description}</p>
                <div className="voting-section">
                  <div className="vote-stats">
                    <span className="vote-count">{decision.votes.toLocaleString()} votes</span>
                    <span className="yes-percent">{decision.yesPercent}% YES</span>
                  </div>
                  <div className="vote-buttons">
                    <button className="vote-btn yes">Vote YES</button>
                    <button className="vote-btn no">Vote NO</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysDecisions;
