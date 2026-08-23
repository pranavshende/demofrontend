import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, align = 'center', className = '' }) => {
  return (
    <div className={`section-header align-${align} ${className}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title marathi-text">{title}</h2>
      <div className="section-divider"></div>
    </div>
  );
};

export default SectionHeader;
