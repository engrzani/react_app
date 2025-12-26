import React, { useEffect } from 'react';
import Portfolio from '../components/Portfolio';
import { trackEvent } from '../utils/api';
import './PortfolioPage.css';

const PortfolioPage = () => {
  useEffect(() => {
    trackEvent('page_view', { page: 'portfolio' });
  }, []);

  return (
    <div className="portfolio-page">
      <Portfolio />
      
      <section className="portfolio-cta">
        <div className="cta-box">
          <h2>Like What You See?</h2>
          <p>Let's create something amazing together</p>
          <a 
            href="/contact" 
            className="btn btn-primary btn-large"
            onClick={() => trackEvent('contact_cta_click', { from: 'portfolio' })}
          >
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
