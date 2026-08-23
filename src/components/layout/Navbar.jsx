import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Competitions', href: '#competitions' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Artists', href: '#artists' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon"></div>
          <div className="logo-text">
            <h2>RAJKUMAR BADOLE</h2>
            <p>SANSKRUTIK MAHOTSAV 2026</p>
          </div>
        </div>

        <div className="navbar-links desktop-only">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className={`nav-link ${index === 0 ? 'active' : ''}`}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions desktop-only">
          <Button variant="primary" size="sm">REGISTER NOW</Button>
        </div>

        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-action">
            <Button variant="primary" className="w-full">REGISTER NOW</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
