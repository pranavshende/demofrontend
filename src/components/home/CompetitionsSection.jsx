import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { competitions } from '../../data/mockData';
import './CompetitionsSection.css';

const CompetitionsSection = () => {
  return (
    <section className="competitions-section section-padding" id="competitions">
      <div className="container">
        <SectionHeader 
          title="TALENT & CULTURAL COMPETITIONS" 
          subtitle="PARTICIPATE"
        />
        
        <div className="competitions-grid">
          {competitions.map((comp, index) => (
            <motion.div 
              key={comp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="competition-card"
            >
              <div className="comp-img-wrapper">
                <img src={comp.image} alt={comp.title} className="comp-img" />
                <Badge variant="primary" className="comp-category-badge">{comp.category}</Badge>
              </div>
              <div className="comp-info">
                <h3 className="comp-title">{comp.title}</h3>
                <ul className="comp-details">
                  <li><span className="detail-label">Age:</span> {comp.ageLimit}</li>
                  <li><span className="detail-label">Prize:</span> {comp.prize}</li>
                  <li><span className="detail-label">Deadline:</span> {comp.deadline}</li>
                </ul>
                <div className="comp-footer">
                  <Badge variant="success">{comp.status}</Badge>
                  <Button variant="primary" size="sm">Register Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
