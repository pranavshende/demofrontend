import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <SectionHeader 
          title="GET IN TOUCH" 
          subtitle="CONTACT US"
        />
        
        <div className="contact-grid">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Mobile" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows="4" required></textarea>
              </div>
              <Button variant="primary" type="submit" className="w-full">SEND MESSAGE</Button>
            </form>
          </div>
          
          <div className="contact-details-container">
            <div className="contact-info-card">
              <h3>Official Contact</h3>
              <ul>
                <li><strong>Phone:</strong> [OFFICIAL PHONE]</li>
                <li><strong>WhatsApp:</strong> [OFFICIAL WHATSAPP]</li>
                <li><strong>Email:</strong> [OFFICIAL EMAIL]</li>
                <li><strong>Address:</strong> [VENUE ADDRESS]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
