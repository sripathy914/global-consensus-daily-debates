
import React from 'react';
import { Users, MessageSquare, CheckCircle, Globe } from "lucide-react";
import './StatsOverview.css';

const StatsOverview = () => {
  const stats = [
    {
      icon: Users,
      label: "Active Participants",
      value: "2.4M",
      change: "+12% this week",
      color: "blue"
    },
    {
      icon: CheckCircle,
      label: "Decisions Made",
      value: "15,847",
      change: "+45 today",
      color: "green"
    },
    {
      icon: MessageSquare,
      label: "Comments Posted",
      value: "892K",
      change: "+2.3K today",
      color: "purple"
    },
    {
      icon: Globe,
      label: "Countries Participating",
      value: "193",
      change: "Global reach",
      color: "orange"
    }
  ];

  return (
    <section className="stats-container">
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="stat-card">
              <div className={`stat-icon ${stat.color}`}>
                <IconComponent />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className={`stat-change ${stat.color}`}>{stat.change}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsOverview;
