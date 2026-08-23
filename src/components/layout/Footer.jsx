import React from 'react';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import Button from '../ui/Button';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo-icon"></div>
              <div className="logo-text">
                <h2>RAJKUMAR BADOLE</h2>
                <p>SANSKRUTIK MAHOTSAV 2026</p>
              </div>
            </div>
            <p className="footer-desc">
              Celebrating Culture.<br/>
              Empowering Talent.<br/>
              Inspiring Youth.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><span className="font-bold">FB</span></a>
              <a href="#" aria-label="Instagram"><span className="font-bold">IG</span></a>
              <a href="#" aria-label="YouTube"><span className="font-bold">YT</span></a>
              <a href="#" aria-label="Twitter"><span className="font-bold">X</span></a>
              <a href="#" aria-label="WhatsApp"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About Mahotsav</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#competitions">Competitions</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#artists">Artists</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#results">Results</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">CONTACT US</h3>
            <ul className="footer-contact">
              <li><Phone size={16} /> [OFFICIAL PHONE]</li>
              <li><MessageCircle size={16} /> [OFFICIAL WHATSAPP]</li>
              <li><Mail size={16} /> [OFFICIAL EMAIL]</li>
              <li className="align-start"><MapPin size={16} className="mt-1" /> <span>[VENUE ADDRESS]</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">NEWSLETTER</h3>
            <p className="newsletter-text">Subscribe to get latest updates about Mahotsav 2026.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <Button variant="primary" type="submit">SUBSCRIBE</Button>
            </form>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Rajkumar Badole Sanskrutik Mahotsav. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
