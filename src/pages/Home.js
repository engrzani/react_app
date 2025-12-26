import React, { useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import ChatBox from '../components/ChatBox';
import { trackEvent } from '../utils/api';
import './Home.css';

const Home = () => {
  useEffect(() => {
    trackEvent('page_view', { page: 'home' });
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi! I'm Your <span className="highlight">Upwork Expert</span>
          </h1>
          <p className="hero-subtitle">
            Building amazing web applications and AI solutions for clients worldwide
          </p>
          <div className="hero-cta">
            <a 
              href="#profile" 
              className="btn btn-primary"
              onClick={() => trackEvent('hero_cta_click', { action: 'view_profile' })}
            >
              View My Profile
            </a>
            <a 
              href="#chat" 
              className="btn btn-secondary"
              onClick={() => trackEvent('hero_cta_click', { action: 'ask_questions' })}
            >
              Ask Me Anything
            </a>
          </div>
        </div>
        <div className="hero-animation">
          <div className="floating-icon">💼</div>
          <div className="floating-icon">💻</div>
          <div className="floating-icon">🚀</div>
          <div className="floating-icon">⚡</div>
        </div>
      </section>

      <section id="profile" className="profile-section">
        <ProfileCard />
      </section>

      <section id="chat" className="chat-section">
        <div className="section-header">
          <h2>Have Questions?</h2>
          <p>Ask me anything about my services, rates, or expertise</p>
        </div>
        <ChatBox />
      </section>

      <section className="why-hire-section">
        <h2>Why Work With Me?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Quick turnaround times without compromising quality</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💯</div>
            <h3>100% Job Success</h3>
            <p>Perfect track record on Upwork with satisfied clients</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🔧</div>
            <h3>Modern Tech Stack</h3>
            <p>Using the latest technologies and best practices</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <h3>Great Communication</h3>
            <p>Regular updates and clear, responsive communication</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how I can help bring your ideas to life</p>
          <div className="cta-buttons">
            <a 
              href="/contact" 
              className="btn btn-primary btn-large"
              onClick={() => trackEvent('cta_click', { location: 'bottom_section' })}
            >
              Get in Touch
            </a>
            <a 
              href="/portfolio" 
              className="btn btn-secondary btn-large"
              onClick={() => trackEvent('portfolio_click', { location: 'bottom_section' })}
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
