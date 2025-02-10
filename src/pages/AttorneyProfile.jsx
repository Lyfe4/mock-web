import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap,
  MapPin,
  Languages,
  Calendar,
  ArrowLeft
} from 'lucide-react';
import './AttorneyProfile.css';
import woman from '../images/woman.webp'
import guy from '../images/guy.jpg'

const AttorneyProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { attorneyId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // In a real application, this would come from an API
  const attorneyData = {
    'sarah-stanley': {
      name: 'Sarah Stanley',
      image: woman,
      role: 'Managing Partner',
      expertise: 'Corporate Law',
      yearsExperience: 20,
      email: 'sarah.stanley@example.com',
      phone: '+61412345678',
      linkedin: 'https://linkedin.com',
      description: 'With over 20 years of experience, Sarah leads our corporate practice with expertise in mergers & acquisitions and business law.',
      education: [
        {
          degree: 'Juris Doctor',
          institution: 'Harvard Law School',
          year: '2003'
        },
        {
          degree: 'Bachelor of Commerce',
          institution: 'University of Sydney',
          year: '2000'
        }
      ],
      awards: [
        {
          title: 'Best Corporate Lawyer 2023',
          year: '2023',
          issuer: 'Legal Excellence Awards'
        },
        {
          title: 'Top 50 Women in Law',
          year: '2022',
          issuer: 'Legal Business Magazine'
        }
      ],
      expertise_areas: [
        'Mergers & Acquisitions',
        'Corporate Restructuring',
        'International Business Law',
        'Securities Regulation',
        'Corporate Governance',
        'Joint Ventures'
      ],
      languages: ['English', 'French', 'Mandarin'],
      publications: [
        {
          title: 'The Future of Corporate Law in the Digital Age',
          publisher: 'Legal Review Quarterly',
          year: '2023'
        },
        {
          title: 'Understanding Modern Corporate Governance',
          publisher: 'Business Law Journal',
          year: '2022'
        }
      ],
      speaking_engagements: [
        {
          title: 'Corporate Law Summit 2023',
          role: 'Keynote Speaker',
          location: 'Sydney',
          date: 'October 2023'
        },
        {
          title: 'International Business Law Conference',
          role: 'Panel Moderator',
          location: 'Melbourne',
          date: 'May 2023'
        }
      ],
      notable_cases: [
        {
          title: 'Major Tech Merger',
          description: 'Led the legal team in a $500M technology company merger',
          year: '2022'
        },
        {
          title: 'International Acquisition',
          description: 'Successfully managed cross-border acquisition worth $300M',
          year: '2021'
        }
      ]
    },
    // Add other attorneys similarly
  };

  const attorney = attorneyData[attorneyId];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!attorney) {
    return (
      <div className="error-screen">
        <h1>Attorney Not Found</h1>
        <Link to="/team" className="back-link">
          <ArrowLeft size={20} />
          Back to Team
        </Link>
      </div>
    );
  }

  return (
    <div className="attorney-profile-page">
      <section className="attorney-hero">
        <div className="attorney-hero-content">
          <Link to="/team" className="back-link">
            <ArrowLeft size={20} />
            Back to Team
          </Link>
          <div className="attorney-main-info animate-fade-in">
            <div className="attorney-image-container">
              <div className="attorney-image" 
                style={{ 
                  backgroundImage: `url(${attorney.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className="attorney-social">
                <a href={`mailto:${attorney.email}`} className="social-link">
                  <Mail size={20} />
                </a>
                <a href={`tel:${attorney.phone}`} className="social-link">
                  <Phone size={20} />
                </a>
                <a href={attorney.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="attorney-info">
              <h1>{attorney.name}</h1>
              <h2>{attorney.role}</h2>
              <p className="expertise">{attorney.expertise}</p>
              <div className="quick-stats">
                <div className="stat">
                  <Briefcase size={16} />
                  <span>{attorney.yearsExperience}+ Years Experience</span>
                </div>
                <div className="stat">
                  <Award size={16} />
                  <span>{attorney.awards.length} Awards</span>
                </div>
                <div className="stat">
                  <Languages size={16} />
                  <span>{attorney.languages.length} Languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="attorney-content">
        <div className="content-tabs">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button 
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education & Awards
          </button>
          <button 
            className={`tab-button ${activeTab === 'publications' ? 'active' : ''}`}
            onClick={() => setActiveTab('publications')}
          >
            Publications
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-tab animate-fade-in">
              <div className="description-section">
                <h3>About</h3>
                <p>{attorney.description}</p>
              </div>
              <div className="expertise-section">
                <h3>Areas of Expertise</h3>
                <ul className="expertise-list">
                  {attorney.expertise_areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
              <div className="languages-section">
                <h3>Languages</h3>
                <div className="language-tags">
                  {attorney.languages.map((language) => (
                    <span key={language} className="language-tag">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="experience-tab animate-fade-in">
              <div className="notable-cases">
                <h3>Notable Cases</h3>
                <div className="cases-grid">
                  {attorney.notable_cases.map((case_) => (
                    <div key={case_.title} className="case-card">
                      <h4>{case_.title}</h4>
                      <p>{case_.description}</p>
                      <span className="case-year">{case_.year}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="speaking-engagements">
                <h3>Speaking Engagements</h3>
                <div className="engagements-list">
                  {attorney.speaking_engagements.map((engagement) => (
                    <div key={engagement.title} className="engagement-item">
                      <div className="engagement-icon">
                        <Calendar size={20} />
                      </div>
                      <div className="engagement-details">
                        <h4>{engagement.title}</h4>
                        <p>{engagement.role}</p>
                        <div className="engagement-meta">
                          <span><MapPin size={14} /> {engagement.location}</span>
                          <span><Calendar size={14} /> {engagement.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-tab animate-fade-in">
              <div className="education-section">
                <h3>Education</h3>
                <div className="education-list">
                  {attorney.education.map((edu) => (
                    <div key={edu.degree} className="education-item">
                      <div className="education-icon">
                        <GraduationCap size={20} />
                      </div>
                      <div className="education-details">
                        <h4>{edu.degree}</h4>
                        <p>{edu.institution}</p>
                        <span className="education-year">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="awards-section">
                <h3>Awards & Recognition</h3>
                <div className="awards-list">
                  {attorney.awards.map((award) => (
                    <div key={award.title} className="award-item">
                      <div className="award-icon">
                        <Award size={20} />
                      </div>
                      <div className="award-details">
                        <h4>{award.title}</h4>
                        <p>{award.issuer}</p>
                        <span className="award-year">{award.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'publications' && (
            <div className="publications-tab animate-fade-in">
              <div className="publications-list">
                {attorney.publications.map((pub) => (
                  <div key={pub.title} className="publication-item">
                    <div className="publication-icon">
                      <BookOpen size={20} />
                    </div>
                    <div className="publication-details">
                      <h4>{pub.title}</h4>
                      <p>{pub.publisher}</p>
                      <span className="publication-year">{pub.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AttorneyProfile;