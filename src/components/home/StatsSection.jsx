import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../../data/mockData';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section container">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="stat-card"
          >
            <div className="stat-value">
              {stat.value}<span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
