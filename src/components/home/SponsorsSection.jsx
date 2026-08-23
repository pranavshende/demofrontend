import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { sponsors } from '../../data/mockData';
import './SponsorsSection.css';

const SponsorsSection = () => {
  return (
    <section className="sponsors-section section-padding">
      <div className="container">
        <SectionHeader 
          title="OUR SPONSORS & PARTNERS" 
          subtitle="SUPPORTED BY"
        />
        
        <div className="sponsors-grid">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-card">
              <span className="sponsor-tier">{sponsor.name}</span>
              <div className="sponsor-logo-box">
                {sponsor.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
