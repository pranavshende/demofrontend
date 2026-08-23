import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, viewAllLink, hideIcon = false, className = '' }) => {
  return (
    <div className={`section-header-row ${className}`}>
      <div className="section-title-wrap">
        {!hideIcon && <span className="decorative-icon">❖</span>}
        <h2 className="section-title">{title}</h2>
      </div>
      {viewAllLink && (
        <a href={viewAllLink} className="view-all-link">View All</a>
      )}
    </div>
  );
};

export default SectionHeader;
