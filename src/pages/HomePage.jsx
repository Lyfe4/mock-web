import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import './HomePage.css';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            <span className="text-accent">Exceptional</span> Legal Services
          </h1>
          <p className="hero-description animate-fade-in-delay-1">
            Dedicated to providing outstanding legal representation with integrity and professionalism.
          </p>
          <div className="hero-stats animate-fade-in-delay-2">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Cases Won</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="hero-button animate-fade-in-delay-3"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <section className="practice-areas">
        <h2 className="section-title">Our Practice Areas</h2>
        <div className="practice-areas-grid">
          {[
            {
              title: 'Corporate Law',
              description: 'Expert guidance for businesses of all sizes, from startups to established corporations.'
            },
            {
              title: 'Family Law',
              description: 'Compassionate representation for divorce, custody, and other family matters.'
            },
            {
              title: 'Real Estate',
              description: 'Comprehensive legal solutions for all your real estate transactions and disputes.'
            }
          ].map((area) => (
            <div key={area.title} className="practice-area-card">
              <h3 className="practice-area-title">{area.title}</h3>
              <p className="practice-area-description">{area.description}</p>
              <Link 
                to="/practice-areas" 
                className="learn-more-link"
              >
                Learn More <ChevronRight className="ml-2" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          {[
            {
              title: 'Experience',
              description: 'Over 20 years of legal expertise'
            },
            {
              title: 'Dedication',
              description: 'Committed to client success'
            },
            {
              title: 'Expertise',
              description: 'Specialized knowledge across practices'
            },
            {
              title: 'Results',
              description: 'Proven track record of success'
            }
          ].map((item) => (
            <div key={item.title} className="feature-item">
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">
            Contact us today for a free consultation. Let our experienced team help you navigate your legal challenges.
          </p>
          <Link 
            to="/contact" 
            className="cta-button"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;