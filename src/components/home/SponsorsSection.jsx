import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import './SponsorsSection.css';

const mockSponsors = [
  { id: 1, name: 'Title Sponsor' },
  { id: 2, name: 'Gold Sponsor' },
  { id: 3, name: 'Silver Sponsor' },
  { id: 4, name: 'Community Partner' },
  { id: 5, name: 'Media Partner' }
];

const SponsorsSection = () => {
  return (
    <section className="sponsors-section section-padding">
      <div className="container">
        <SectionHeader 
          title="OUR SPONSORS & PARTNERS" 
        />
        
        <div className="sponsors-grid">
          {mockSponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-card">
              <div className="sponsor-logo-circle">
                <span className="sponsor-icon">❖</span>
              </div>
              <span className="sponsor-tier">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
