
import React from 'react';
import { MessageSquare, Clock, TrendingUp, Users } from "lucide-react";
import './TopicCard.css';

interface TopicCardProps {
  topic: {
    id: number;
    title: string;
    description: string;
    category: string;
    timeLeft: string;
    totalVotes: number;
    yesVotes: number;
    comments: number;
    status: string;
  };
}

const TopicCard = ({ topic }: TopicCardProps) => {
  const yesPercentage = (topic.yesVotes / topic.totalVotes) * 100;
  const noPercentage = 100 - yesPercentage;

  const getCategoryClass = (category: string) => {
    const classes = {
      Environment: 'environment',
      Economics: 'economics',
      Education: 'education',
      Healthcare: 'healthcare',
      Technology: 'technology'
    };
    return classes[category as keyof typeof classes] || 'environment';
  };

  return (
    <div className="topic-card">
      <div className="card-header">
        <div className="header-content">
          <div className="header-main">
            <div className="badges">
              <span className={`badge ${getCategoryClass(topic.category)}`}>
                {topic.category}
              </span>
              {topic.status === 'trending' && (
                <span className="badge trending">
                  <TrendingUp />
                  Trending
                </span>
              )}
            </div>
            <h3 className="card-title">{topic.title}</h3>
            <p className="card-description">{topic.description}</p>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <div className="content-sections">
          <div className="voting-section">
            <div className="voting-percentages">
              <span className="yes-percentage">Yes: {yesPercentage.toFixed(1)}%</span>
              <span className="no-percentage">No: {noPercentage.toFixed(1)}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-yes"
                style={{ width: `${yesPercentage}%` }}
              />
              <div 
                className="progress-no"
                style={{ width: `${noPercentage}%` }}
              />
            </div>
          </div>

          <div className="stats-row">
            <div className="stats-left">
              <span className="stat-item">
                <Users />
                {topic.totalVotes.toLocaleString()} votes
              </span>
              <span className="stat-item">
                <MessageSquare />
                {topic.comments} comments
              </span>
            </div>
            <span className="time-left">
              <Clock />
              {topic.timeLeft} left
            </span>
          </div>

          <div className="action-buttons">
            <button className="btn btn-yes">Vote Yes</button>
            <button className="btn btn-no">Vote No</button>
            <button className="btn btn-discuss">Discuss</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
