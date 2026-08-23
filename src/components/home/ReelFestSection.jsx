import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './ReelFestSection.css';

const ReelFestSection = () => {
  return (
    <section className="reel-fest-section section-padding">
      <div className="container">
        <div className="reel-fest-grid">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="reel-fest-content"
          >
            <h2 className="reel-title">GEN Z<br/><span>REEL FEST 2026</span></h2>
            <p className="reel-tagline marathi-text">तुमची कल्पना. तुमची Reel. तुमचा मंच.</p>
            
            <div className="reel-actions">
              <Button variant="primary">REGISTER NOW</Button>
              <Button variant="secondary">VIEW RULES</Button>
            </div>
            
            <div className="reel-secondary-actions">
              <button className="reel-icon-btn">
                <span className="icon">🏆</span>
                <span>TOP REELS</span>
              </button>
              <button className="reel-icon-btn">
                <span className="icon">📊</span>
                <span>RESULTS</span>
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="reel-fest-mockup"
          >
            <div className="smartphone-mockup">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop" alt="Reel content" className="mockup-img" />
              <div className="mockup-ui">
                <div className="mockup-header">Rajkumar Badole Fest</div>
                <div className="mockup-bottom">
                  <div className="mockup-user">@cultural_talent</div>
                  <div className="mockup-caption marathi-text">महाराष्ट्राची लोककला #Mahotsav2026</div>
                </div>
              </div>
            </div>
            
            <div className="social-floating-icons">
              <div className="floating-icon insta"></div>
              <div className="floating-icon play"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ReelFestSection;
