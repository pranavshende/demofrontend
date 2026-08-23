import React from 'react';
import { MapPin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import './VenueSection.css';

const VenueSection = () => {
  return (
    <section className="venue-section section-padding">
      <div className="container">
        
        <SectionHeader 
          title="EVENT VENUE" 
          hideIcon={false}
        />
        
        <div className="venue-card">
          <div className="venue-details">
            <MapPin className="venue-icon" size={32} />
            <div>
              <h3 className="venue-name">[VENUE NAME]</h3>
              <p className="venue-address">[VENUE ADDRESS]</p>
            </div>
          </div>
          
          <div className="venue-actions">
            <Button variant="primary" className="venue-btn-primary">
              <span className="btn-icon">📍</span> Get Directions
            </Button>
            <Button variant="secondary" className="venue-btn-secondary">
              <span className="btn-icon">🌍</span> View Map
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default VenueSection;
