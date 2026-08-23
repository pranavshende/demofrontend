import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-content"
        >
          <h1 className="hero-title">
            RAJKUMAR BADOLE<br/>
            <span>SANSKRUTIK MAHOTSAV 2026</span>
          </h1>
          
          <h2 className="hero-subtitle marathi-text">
            कला • संस्कृती • प्रतिभा • परंपरा
          </h2>
          
          <p className="hero-tagline marathi-text">
            आपली संस्कृती, आपली ओळख, आपल्या प्रतिभेचा उत्सव!
          </p>
          
          <p className="hero-description marathi-text">
            भंडारा आणि गोंदिया जिल्ह्यातील कला, संस्कृती आणि युवा प्रतिभेला एक भव्य व्यासपीठ.
          </p>
          
          <div className="hero-actions">
            <Button variant="primary" size="lg">REGISTER NOW</Button>
            <Button variant="secondary" size="lg">EXPLORE MAHOTSAV</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
