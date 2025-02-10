import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const practices = [
    {
      title: 'Corporate Law',
      description: 'Expert guidance for businesses of all sizes, from startups to established corporations.',
      icon: '⚖️',
      services: [
        'Business Formation & Structuring',
        'Contract Negotiations',
        'Corporate Governance',
        'Mergers & Acquisitions',
        'Regulatory Compliance',
        'Shareholder Agreements'
      ],
      stats: {
        experience: '20+ Years',
        cases: '500+ Cases',
        success: '98%'
      }
    },
    {
      title: 'Family Law',
      description: 'Compassionate representation for divorce, custody, and other family matters.',
      icon: '👨‍👩‍👧‍👦',
      services: [
        'Divorce Proceedings',
        'Child Custody & Support',
        'Property Division',
        'Spousal Support',
        'Family Mediation',
        'Adoption Services'
      ],
      stats: {
        experience: '15+ Years',
        cases: '300+ Cases',
        success: '95%'
      }
    },
    {
      title: 'Real Estate',
      description: 'Comprehensive legal solutions for all your real estate transactions and disputes.',
      icon: '🏢',
      services: [
        'Property Transactions',
        'Land Use & Zoning',
        'Lease Agreements',
        'Property Disputes',
        'Development Projects',
        'Title Reviews'
      ],
      stats: {
        experience: '18+ Years',
        cases: '400+ Cases',
        success: '97%'
      }
    }
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="practice-areas-page">
      <section className="practice-hero">
        <div className="practice-hero-content animate-fade-in">
          <h1>Our Practice Areas</h1>
          <p>Specialized legal expertise across multiple disciplines</p>
          <div className="practice-stats animate-fade-in-delay-1">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Years Combined Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1200+</span>
              <span className="stat-label">Cases Won</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">97%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <section className="practice-areas-content">
        {practices.map((practice, index) => (
          <div 
            key={practice.title} 
            className={`practice-card animate-fade-in-delay-${index + 1}`}
          >
            <div className="practice-card-header">
              <span className="practice-icon">{practice.icon}</span>
              <h2>{practice.title}</h2>
            </div>
            <p className="practice-description">{practice.description}</p>
            
            <div className="practice-stats-grid">
              {Object.entries(practice.stats).map(([key, value]) => (
                <div key={key} className="practice-stat">
                  <span className="stat-value">{value}</span>
                  <span className="stat-key">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                </div>
              ))}
            </div>

            <div className="services-container">
              <h3>Our Services</h3>
              <ul className="services-list">
                {practice.services.map((service, serviceIndex) => (
                  <li 
                    key={service}
                    className={`animate-fade-in-delay-${serviceIndex + 1}`}
                  >
                    <ChevronRight className="service-icon" size={16} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="learn-more-btn">
              Learn More
              <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </section>

      <section className="practice-cta">
        <div className="cta-content animate-fade-in">
          <h2>Ready to Discuss Your Case?</h2>
          <p>Our experienced team is here to help you navigate your legal challenges.</p>
          <button className="cta-button">Schedule Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;