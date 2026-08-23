import React from 'react';
import { MapPin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import './VenueSection.css';

const VenueSection = () => {
  return (
    <section className="venue-section section-padding">
      <div className="container">
        <div className="venue-card">
          <div className="venue-info">
            <SectionHeader 
              title="EVENT VENUE" 
              subtitle="LOCATION"
              align="left"
              className="venue-header"
            />
            
            <div className="venue-details">
              <MapPin className="venue-icon" size={32} />
              <div>
                <h3 className="venue-name">[VENUE NAME]</h3>
                <p className="venue-address">[VENUE ADDRESS], Bhandara-Gondia, Maharashtra.</p>
              </div>
            </div>
            
            <div className="venue-actions">
              <Button variant="primary">GET DIRECTIONS</Button>
              <Button variant="secondary" className="btn-dark-outline">VIEW MAP</Button>
            </div>
          </div>
          
          <div className="venue-map">
            <div className="map-placeholder">
              <MapPin size={48} className="text-gray" />
              <span>Map Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
