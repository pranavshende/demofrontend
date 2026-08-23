import React from 'react';
import { Home, Calendar, Trophy, Menu } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav mobile-only">
      <a href="#" className="bottom-nav-item">
        <Home size={22} />
        <span>Home</span>
      </a>
      
      <a href="#events" className="bottom-nav-item">
        <Calendar size={22} />
        <span>Events</span>
      </a>
      
      <div className="bottom-nav-center-item">
        <a href="#competitions" className="center-fab">
          <span className="fab-icon">📋</span>
          <span className="fab-text">Register<br/>Now</span>
        </a>
      </div>
      
      <a href="#winners" className="bottom-nav-item">
        <Trophy size={22} />
        <span>Results</span>
      </a>
      
      <a href="#contact" className="bottom-nav-item">
        <Menu size={22} />
        <span>Contact</span>
      </a>
    </nav>
  );
};

export default BottomNav;
