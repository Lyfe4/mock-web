import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "Calvin & Partners provided exceptional service in handling our corporate merger. Their attention to detail and professional approach made a complex process seamless.",
      author: "Sarah Johnson",
      position: "CEO, Tech Innovations Inc."
    },
    {
      text: "The team's expertise in real estate law helped us navigate multiple property acquisitions with confidence. Their guidance was invaluable.",
      author: "Michael Chang",
      position: "Real Estate Developer"
    },
    {
      text: "Their commitment to client success is unmatched. They provided clear communication and achieved outstanding results for our case.",
      author: "Emma Williams",
      position: "Small Business Owner"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;