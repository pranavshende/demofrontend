import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import './TopPerformancesSection.css';

const TopPerformancesSection = () => {
  return (
    <section className="performances-section section-padding" id="performances">
      <div className="container">
        <SectionHeader 
          title="TOP PERFORMANCES" 
          subtitle="HIGHLIGHTS"
        />
        
        <div className="demo-notice">
          <span className="demo-badge">DEMO DATA</span>
        </div>

        <div className="performances-grid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="performance-card">
              <div className="perf-thumbnail">
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop" alt="Performance" />
                <div className="play-btn">▶</div>
              </div>
              <div className="perf-info">
                <h4>Participant Name</h4>
                <p>Dance Category • 2.5K Votes</p>
                <Button variant="secondary" size="sm" className="w-full mt-2">View Performance</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPerformancesSection;
