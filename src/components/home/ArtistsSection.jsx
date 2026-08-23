import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { artists } from '../../data/mockData';
import './ArtistsSection.css';

const ArtistsSection = () => {
  return (
    <section className="artists-section section-padding" id="artists">
      <div className="container">
        <SectionHeader 
          title="FEATURED ARTISTS" 
          viewAllLink="#"
        />
        
        <div className="artists-grid">
          {artists.map((artist, index) => (
            <motion.div 
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="artist-card"
            >
              <div className="artist-img-wrapper">
                <img src={artist.image} alt={artist.name} className="artist-img" />
              </div>
              <h3 className="artist-name">Artist Name</h3>
              <p className="artist-profession">{artist.profession}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
