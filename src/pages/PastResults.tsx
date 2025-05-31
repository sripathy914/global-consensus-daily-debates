
import React from 'react';
import Header from '@/components/Header';
import './PastResults.css';

const PastResults = () => {
  const pastDecisions = [
    {
      id: 1,
      title: "Remote work as standard post-pandemic",
      result: "APPROVED",
      finalVote: 73,
      totalVotes: 156789,
      date: "2024-12-29",
      impact: "High",
      status: "implemented"
    },
    {
      id: 2,
      title: "Carbon tax on international flights",
      result: "REJECTED",
      finalVote: 42,
      totalVotes: 98234,
      date: "2024-12-28",
      impact: "Medium",
      status: "archived"
    },
    {
      id: 3,
      title: "Digital privacy as fundamental right",
      result: "APPROVED",
      finalVote: 89,
      totalVotes: 234567,
      date: "2024-12-27",
      impact: "Very High",
      status: "in-progress"
    }
  ];

  return (
    <div className="page-container">
      <Header />
      <div className="results-page">
        <div className="container">
          <div className="page-header">
            <h1>Past Global Decisions</h1>
            <p>Results and implementation status of concluded decisions</p>
          </div>
          
          <div className="results-grid">
            {pastDecisions.map((decision) => (
              <div key={decision.id} className="result-card">
                <div className="result-header">
                  <div className={`result-badge ${decision.result.toLowerCase()}`}>
                    {decision.result}
                  </div>
                  <span className="result-date">{decision.date}</span>
                </div>
                <h3 className="result-title">{decision.title}</h3>
                <div className="result-stats">
                  <div className="vote-percentage">
                    <span className="percentage">{decision.finalVote}%</span>
                    <span className="label">Final Result</span>
                  </div>
                  <div className="total-votes">
                    <span className="count">{decision.totalVotes.toLocaleString()}</span>
                    <span className="label">Total Votes</span>
                  </div>
                  <div className="impact-level">
                    <span className="impact">{decision.impact}</span>
                    <span className="label">Impact Level</span>
                  </div>
                </div>
                <div className={`status-indicator ${decision.status}`}>
                  Status: {decision.status.charAt(0).toUpperCase() + decision.status.slice(1).replace('-', ' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastResults;
