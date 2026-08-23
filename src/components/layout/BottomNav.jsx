import React from 'react';
import { Home, Calendar, Trophy, Menu } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav mobile-only">
      <div className="bottom-nav-item">
        <Home size={22} />
        <span>Home</span>
      </div>
      
      <div className="bottom-nav-item">
        <Calendar size={22} />
        <span>Events</span>
      </div>
      
      <div className="bottom-nav-center-item">
        <div className="center-fab">
          <span className="fab-icon">📋</span>
          <span className="fab-text">Register<br/>Now</span>
        </div>
      </div>
      
      <div className="bottom-nav-item">
        <Trophy size={22} />
        <span>Results</span>
      </div>
      
      <div className="bottom-nav-item">
        <Menu size={22} />
        <span>Menu</span>
      </div>
    </nav>
  );
};

export default BottomNav;
