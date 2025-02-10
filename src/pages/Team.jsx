import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, Phone, Award, Briefcase, GraduationCap } from 'lucide-react';
import './Team.css';
import { Link } from 'react-router-dom';
import guy from '../images/guy.jpg'
import woman from '../images/woman.webp'

const Team = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Stanley',
      image: woman,
      role: 'Managing Partner',
      expertise: 'Corporate Law',
      yearsExperience: 20,
      description: 'With over 20 years of experience, Sarah leads our corporate practice with expertise in mergers & acquisitions and business law.',
      education: 'J.D., Harvard Law School',
      awards: [
        'Best Corporate Lawyer 2023',
        'Legal Excellence Award',
        'Top 50 Women in Law'
      ],
      expertise_areas: [
        'Mergers & Acquisitions',
        'Corporate Restructuring',
        'International Business Law',
        'Securities Regulation'
      ],
      languages: ['English', 'French', 'Mandarin'],
      social: {
        linkedin: 'https://linkedin.com',
        email: 'sarah.stanley@example.com',
        phone: '+61412345678'
      }
    },
    {
      name: 'Michael Chen',
      image: guy,
      role: 'Senior Partner',
      expertise: 'Family Law',
      yearsExperience: 15,
      description: 'Michael brings compassion and expertise to our family law practice, helping clients navigate complex domestic matters.',
      education: 'J.D., Yale Law School',
      awards: [
        'Family Law Practitioner of the Year',
        'Pro Bono Excellence Award'
      ],
      expertise_areas: [
        'Divorce Proceedings',
        'Child Custody',
        'Family Mediation',
        'Property Settlements'
      ],
      languages: ['English', 'Mandarin', 'Cantonese'],
      social: {
        linkedin: 'https://linkedin.com',
        email: 'michael.chen@example.com',
        phone: '+61412345679'
      }
    },
    {
      name: 'Emily Thompson',
      image: woman,
      role: 'Partner',
      expertise: 'Real Estate Law',
      yearsExperience: 12,
      description: 'Emily specializes in complex real estate transactions and development projects across the commercial sector.',
      education: 'J.D., Stanford Law School',
      awards: [
        'Rising Star in Real Estate Law',
        'Excellence in Property Law'
      ],
      expertise_areas: [
        'Commercial Real Estate',
        'Property Development',
        'Leasing Agreements',
        'Land Use & Zoning'
      ],
      languages: ['English', 'Spanish'],
      social: {
        linkedin: 'https://linkedin.com',
        email: 'emily.thompson@example.com',
        phone: '+61412345680'
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
    <div className="team-page">
      <section className="team-hero">
        <div className="team-hero-content animate-fade-in">
          <h1>Our Team</h1>
          <p>Meet our experienced legal professionals</p>
          <div className="team-stats animate-fade-in-delay-1">
            <div className="stat-item">
              <span className="stat-number">47+</span>
              <span className="stat-label">Years Combined Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3000+</span>
              <span className="stat-label">Cases Handled</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Languages Spoken</span>
            </div>
          </div>
        </div>
      </section>

      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <div 
            key={member.name}
            className={`team-card animate-fade-in-delay-${index + 1}`}
            onClick={() => setSelectedMember(selectedMember === member ? null : member)}
          >
            <div className="member-image-container">
              <div className="member-image"
                style={{ 
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className="member-social">
                <a href={member.social.linkedin} className="social-link">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${member.social.email}`} className="social-link">
                  <Mail size={20} />
                </a>
                <a href={`tel:${member.social.phone}`} className="social-link">
                  <Phone size={20} />
                </a>
              </div>
            </div>

            <div className="member-info">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p className="member-expertise">{member.expertise}</p>
              
              <div className="member-stats">
                <div className="member-stat">
                  <Briefcase size={16} />
                  <span>{member.yearsExperience}+ Years</span>
                </div>
                <div className="member-stat">
                  <GraduationCap size={16} />
                  <span>{member.education.split(',')[0]}</span>
                </div>
                <div className="member-stat">
                  <Award size={16} />
                  <span>{member.awards.length} Awards</span>
                </div>
              </div>

              <p className="member-description">{member.description}</p>

              {selectedMember === member && (
                <div className="member-details animate-fade-in">
                  <div className="member-section">
                    <h4>Areas of Expertise</h4>
                    <ul className="expertise-list">
                      {member.expertise_areas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="member-section">
                    <h4>Awards & Recognition</h4>
                    <ul className="awards-list">
                      {member.awards.map((award) => (
                        <li key={award}>{award}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="member-section">
                    <h4>Languages</h4>
                    <div className="languages-list">
                      {member.languages.map((language) => (
                        <span key={language} className="language-tag">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

<Link 
  to={`/team/${member.name.toLowerCase().replace(' ', '-')}`}
  className="view-profile-btn"
>
  View Full Profile
</Link>
            </div>
          </div>
        ))}
      </section>

      <section className="team-cta">
        <div className="cta-content animate-fade-in">
          <h2>Work With Our Team</h2>
          <p>Let our experienced professionals help you navigate your legal challenges.</p>
          <button className="cta-button">Schedule a Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Team;