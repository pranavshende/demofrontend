import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        
        <SectionHeader 
          title="GET IN TOUCH" 
          hideIcon={true}
        />
        
        <div className="contact-layout">
          <div className="contact-info-list">
            <div className="contact-item">
              <Phone className="contact-icon" size={20} />
              <span>[OFFICIAL PHONE]</span>
            </div>
            <div className="contact-item">
              <MessageCircle className="contact-icon" size={20} />
              <span>[OFFICIAL WHATSAPP]</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={20} />
              <span>[OFFICIAL EMAIL]</span>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <span>[VENUE ADDRESS]</span>
            </div>
          </div>
          
          <div className="contact-illustration-wrapper">
            <div className="temple-illustration"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;
