
import React from 'react';
import { MessageSquare, Check, TrendingUp, Zap } from "lucide-react";
import TopicCard from "@/components/TopicCard";
import Header from "@/components/Header";
import StatsOverview from "@/components/StatsOverview";
import FuturisticBackground from "@/components/FuturisticBackground";
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
    <div className="futuristic-page">
      <FuturisticBackground />
      <Header />
      
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Zap size={16} />
              <span>The Future of Global Democracy</span>
            </div>
            <h1 className="hero-title">
              The World Decides
              <span className="gradient-text"> Together</span>
            </h1>
            <p className="hero-description">
              Every day, our world faces decisions that affect us all. Join millions of people 
              in thoughtful discussion and democratic decision-making on the issues that matter most.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary glow-btn">
                <MessageSquare size={20} />
                Join the Discussion
              </button>
              <button className="btn-secondary glass-btn">
                <TrendingUp size={20} />
                Submit a Topic
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
          </div>
        </div>
      </section>

      <StatsOverview />

      <section className="decisions-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Today's Global
              <span className="gradient-text"> Decisions</span>
            </h2>
            <p className="section-description">
              These are the most important decisions the world is making today. Your voice matters.
            </p>
          </div>

          <div className="topics-grid">
            {featuredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon discuss">
                <MessageSquare size={24} />
              </div>
              <h3 className="feature-title">Discuss</h3>
              <p className="feature-description">
                Engage in meaningful conversations about global issues with people from around the world.
              </p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon decide">
                <Check size={24} />
              </div>
              <h3 className="feature-title">Decide</h3>
              <p className="feature-description">
                Cast your vote on important decisions using our democratic voting systems.
              </p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon impact">
                <TrendingUp size={24} />
              </div>
              <h3 className="feature-title">Impact</h3>
              <p className="feature-description">
                See how collective decisions influence real-world policies and changes globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="futuristic-footer">
        <div className="footer-container">
          <div className="footer-content">
            <h3 className="footer-title">Ready to Shape the Future?</h3>
            <p className="footer-description">
              Join thousands of engaged global citizens making decisions that matter.
            </p>
            <button className="btn-primary glow-btn">
              <Zap size={20} />
              Get Started Today
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
