import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './VotingSection.css';

const VotingSection = () => {
  return (
    <section className="voting-section section-padding">
      <div className="container">
        <div className="voting-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="voting-content"
          >
            <h2 className="voting-title">PUBLIC VOTING</h2>
            <p className="voting-desc">Support your favorite performer. Your vote can make them the winner!</p>
            
            <div className="voting-stats">
              <div className="vote-stat">
                <h4>120+</h4>
                <p>Participants</p>
              </div>
              <div className="vote-stat">
                <h4>10K+</h4>
                <p>Votes Cast</p>
              </div>
              <div className="vote-stat">
                <h4>5K+</h4>
                <p>Voters</p>
              </div>
            </div>
            
            <Button variant="primary" size="lg">VOTE NOW</Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="voting-illustration"
          >
            <div className="ballot-box">
              <div className="ballot-slot"></div>
              <div className="ballot-paper">VOTE</div>
              <div className="ballot-body">VOTE</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VotingSection;
