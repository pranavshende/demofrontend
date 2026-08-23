import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { culturalEvents } from '../../data/mockData';
import './CulturalEventsSection.css';

const CulturalEventsSection = () => {
  return (
    <section className="cultural-events-section section-padding" id="events">
      <div className="container">
        <SectionHeader 
          title="CULTURAL EVENTS" 
          subtitle="EXPLORE"
        />
        
        <div className="events-grid">
          {culturalEvents.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="event-card"
            >
              <div className="event-img-wrapper">
                <img src={event.image} alt={event.title} className="event-img" />
                <div className="event-overlay"></div>
                <div className="event-icon">🎭</div>
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-time">{event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalEventsSection;
