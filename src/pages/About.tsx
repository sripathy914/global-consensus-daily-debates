
import React from 'react';
import Header from '@/components/Header';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="about-page">
        <div className="container">
          <div className="about-hero">
            <h1>About DecideGlobal</h1>
            <p className="hero-subtitle">
              Empowering global democracy through collective decision-making on the issues that matter most to humanity.
            </p>
          </div>

          <div className="about-content">
            <section className="mission-section">
              <h2>Our Mission</h2>
              <p>
                DecideGlobal is a revolutionary platform that brings together people from around the world to discuss, 
                debate, and democratically decide on critical global issues. We believe that the challenges facing our 
                planet require collective wisdom and unified action.
              </p>
            </section>

            <section className="how-it-works-section">
              <h2>How It Works</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Submit Topics</h3>
                  <p>Community members propose global issues that need collective decision-making.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Expert Review</h3>
                  <p>Submitted topics undergo review by subject matter experts and community moderators.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Global Discussion</h3>
                  <p>Approved topics open for worldwide discussion, debate, and evidence sharing.</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Democratic Voting</h3>
                  <p>After thorough discussion, the global community votes on the proposed decision.</p>
                </div>
                <div className="step">
                  <div className="step-number">5</div>
                  <h3>Implementation</h3>
                  <p>Approved decisions are shared with governments, organizations, and advocacy groups for implementation.</p>
                </div>
              </div>
            </section>

            <section className="principles-section">
              <h2>Our Principles</h2>
              <div className="principles-grid">
                <div className="principle">
                  <h3>🌍 Global Perspective</h3>
                  <p>Every decision considers impact across all nations, cultures, and communities.</p>
                </div>
                <div className="principle">
                  <h3>🗳️ Democratic Process</h3>
                  <p>One person, one vote. Every voice matters in shaping our collective future.</p>
                </div>
                <div className="principle">
                  <h3>📚 Evidence-Based</h3>
                  <p>Decisions are grounded in scientific research, data, and expert analysis.</p>
                </div>
                <div className="principle">
                  <h3>🤝 Inclusive Dialogue</h3>
                  <p>We foster respectful discussion across diverse viewpoints and backgrounds.</p>
                </div>
                <div className="principle">
                  <h3>⚡ Actionable Impact</h3>
                  <p>Our decisions translate into real-world policy recommendations and advocacy.</p>
                </div>
                <div className="principle">
                  <h3>🔒 Transparency</h3>
                  <p>All processes, votes, and results are open and verifiable by the community.</p>
                </div>
              </div>
            </section>

            <section className="impact-section">
              <h2>Our Impact</h2>
              <p>
                Since our launch, DecideGlobal has facilitated democratic decisions on over 500 global issues, 
                with participation from citizens in 180+ countries. Our recommendations have been cited by 
                international organizations, governments, and advocacy groups worldwide.
              </p>
              <div className="impact-stats">
                <div className="stat">
                  <span className="stat-number">2.3M+</span>
                  <span className="stat-label">Active Participants</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Decisions Made</span>
                </div>
                <div className="stat">
                  <span className="stat-number">180+</span>
                  <span className="stat-label">Countries Represented</span>
                </div>
                <div className="stat">
                  <span className="stat-number">89%</span>
                  <span className="stat-label">Implementation Rate</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
