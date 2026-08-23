import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { scheduleItems } from '../../data/mockData';
import './ScheduleSection.css';

const ScheduleSection = () => {
  return (
    <section className="schedule-section section-padding" id="schedule">
      <div className="container">
        
        <SectionHeader 
          title="UPCOMING SCHEDULE" 
          viewAllLink="#"
        />
        
        <div className="schedule-list">
          {scheduleItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="schedule-item"
            >
              <div className="schedule-date-badge">
                <span className="date">{item.date}</span>
                <span className="month">{item.month}</span>
              </div>
              
              <div className="schedule-info">
                <h3 className="schedule-title">{item.title}</h3>
                <div className="schedule-meta">
                  <span>[TIME] • [VENUE]</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ScheduleSection;
