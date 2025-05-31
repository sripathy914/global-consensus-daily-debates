
import React from 'react';
import { Users, MessageSquare, Check, Clock } from "lucide-react";
import TopicCard from "@/components/TopicCard";
import Header from "@/components/Header";
import StatsOverview from "@/components/StatsOverview";
import './Index.css';

const Index = () => {
  const featuredTopics = [
    {
      id: 1,
      title: "Should cities worldwide implement car-free zones to combat climate change?",
      description: "Major cities are considering expanding pedestrian-only areas. What's the global consensus?",
      category: "Environment",
      timeLeft: "18 hours",
      totalVotes: 24567,
      yesVotes: 15890,
      comments: 892,
      status: "active"
    },
    {
      id: 2,
      title: "Universal Basic Income pilot programs: Should they be expanded globally?",
      description: "Multiple countries have tested UBI. Should this become a worldwide standard?",
      category: "Economics",
      timeLeft: "2 days",
      totalVotes: 18234,
      yesVotes: 12456,
      comments: 1203,
      status: "active"
    },
    {
      id: 3,
      title: "Mandatory digital literacy education in all schools by 2025?",
      description: "As technology advances, should digital skills be a required part of global curriculum?",
      category: "Education",
      timeLeft: "5 days",
      totalVotes: 31245,
      yesVotes: 24890,
      comments: 756,
      status: "trending"
    }
  ];

  return (
    <div className="page-container">
      <Header />
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            The World Decides
            <span className="highlight"> Together</span>
          </h1>
          <p className="hero-description">
            Every day, our world faces decisions that affect us all. Join millions of people 
            in thoughtful discussion and democratic decision-making on the issues that matter most.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Join the Discussion</button>
            <button className="btn-secondary">Submit a Topic</button>
          </div>
        </div>
      </section>

      <StatsOverview />

      <section className="decisions-section">
        <div className="section-header">
          <h2 className="section-title">Today's Global Decisions</h2>
          <p className="section-description">
            These are the most important decisions the world is making today. Your voice matters.
          </p>
        </div>

        <div className="topics-grid">
          {featuredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon blue">
                <MessageSquare />
              </div>
              <h3 className="feature-title">Discuss</h3>
              <p className="feature-description">
                Engage in meaningful conversations about global issues with people from around the world.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green">
                <Check />
              </div>
              <h3 className="feature-title">Decide</h3>
              <p className="feature-description">
                Cast your vote on important decisions using our democratic voting systems.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon purple">
                <Users />
              </div>
              <h3 className="feature-title">Impact</h3>
              <p className="feature-description">
                See how collective decisions influence real-world policies and changes globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h3 className="footer-title">Ready to Shape the Future?</h3>
          <p className="footer-description">
            Join thousands of engaged global citizens making decisions that matter.
          </p>
          <button className="btn-primary">Get Started Today</button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
