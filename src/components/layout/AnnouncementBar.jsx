import React from 'react';
import { Bell } from 'lucide-react';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="container announcement-content">
        <div className="announcement-text">
          <Bell size={16} className="announcement-icon" />
          <span><span className="marathi-text">📢 घोषणा:</span> नोंदणी अंतिम तारीख वाढवण्यात आली आहे! अंतिम तारीख: [EVENT DATE]</span>
        </div>
        <a href="#" className="announcement-link">View All</a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
