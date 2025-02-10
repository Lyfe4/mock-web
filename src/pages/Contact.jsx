import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content animate-fade-in">
          <h1>Contact Us</h1>
          <p>Get in touch with our team of legal experts</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-info-container animate-fade-in-delay-1">
            <div className="contact-info-card">
              <h2>Contact Information</h2>
              <p className="contact-subtitle">
                Our team is available to assist you with any inquiries.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <MapPin size={24} className="info-icon" />
                  <div className="info-text">
                    <h3>Visit Us</h3>
                    <p>123 Legal Street</p>
                    <p>Suite 100</p>
                    <p>Sydney, NSW 2000</p>
                  </div>
                </div>

                <div className="info-item">
                  <Phone size={24} className="info-icon" />
                  <div className="info-text">
                    <h3>Call Us</h3>
                    <a href="tel:+61412345678">0412 345 678</a>
                  </div>
                </div>

                <div className="info-item">
                  <Mail size={24} className="info-icon" />
                  <div className="info-text">
                    <h3>Email Us</h3>
                    <a href="mailto:contact@calvinpartners.com">
                      contact@calvinpartners.com
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <Clock size={24} className="info-icon" />
                  <div className="info-text">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container animate-fade-in-delay-2">
            <div className="form-card">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0400 000 000"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your case..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${formStatus ? 'sending' : ''}`}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="button-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {formStatus === 'success' && (
                <div className="form-status success animate-fade-in">
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-status error animate-fade-in">
                  <AlertCircle size={20} />
                  <span>There was an error sending your message. Please try again.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;