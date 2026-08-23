import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { galleryImages } from '../../data/mockData';
import './GallerySection.css';

const GallerySection = () => {
  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        <SectionHeader 
          title="MAHOTSAV GALLERY" 
          subtitle="MEMORIES"
        />
        
        <div className="gallery-scroll-container">
          <div className="gallery-track">
            {galleryImages.map((img) => (
              <div key={img.id} className="gallery-item">
                <img src={img.src} alt={img.category} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span>{img.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
