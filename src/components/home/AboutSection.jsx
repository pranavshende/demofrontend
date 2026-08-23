import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import './AboutSection.css';

const AboutSection = () => {
  const highlights = [
    "स्थानिक प्रतिभेला व्यासपीठ (Local Talent Platform)",
    "महाराष्ट्राची समृद्ध संस्कृती (Rich Maharashtra Culture)",
    "युवा सहभाग आणि प्रेरणा (Youth Participation)",
    "लोक कला आणि संगीत (Folk Arts & Music)"
  ];

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <SectionHeader 
              title="आपल्या संस्कृतीचा भव्य उत्सव" 
              subtitle="ABOUT MAHOTSAV"
              align="left"
            />
            
            <p className="about-description marathi-text">
              राजकुमार बडोले सांस्कृतिक महोत्सव हा भंडारा आणि गोंदिया जिल्ह्यातील 
              तरुणाईच्या कला, संस्कृती, परंपरा आणि लोककलेला प्रोत्साहन देण्यासाठी 
              एक भव्य व्यासपीठ आहे. संगीत, नृत्य, नाटक, लोककला, साहित्य, पारंपरिक 
              कला आणि आधुनिक सर्जनशीलतेचा संगम येथे पाहायला मिळतो.
            </p>
            
            <ul className="about-highlights marathi-text">
              {highlights.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 className="highlight-icon" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="primary">KNOW MORE ABOUT MAHOTSAV</Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image-collage"
          >
            <div className="collage-img-1">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop" alt="Cultural Event" />
            </div>
            <div className="collage-img-2">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop" alt="Cultural Dance" />
            </div>
            <div className="decorative-circle"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
