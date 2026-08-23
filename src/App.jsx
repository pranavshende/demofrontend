import React from 'react';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HeroSection from './components/home/HeroSection';
import Countdown from './components/home/Countdown';
import StatsSection from './components/home/StatsSection';
import AboutSection from './components/home/AboutSection';
import ReelFestSection from './components/home/ReelFestSection';
import CulturalEventsSection from './components/home/CulturalEventsSection';
import CompetitionsSection from './components/home/CompetitionsSection';
import ScheduleSection from './components/home/ScheduleSection';
import ArtistsSection from './components/home/ArtistsSection';
import VotingSection from './components/home/VotingSection';
import TopPerformancesSection from './components/home/TopPerformancesSection';
import GallerySection from './components/home/GallerySection';
import SponsorsSection from './components/home/SponsorsSection';
import VenueSection from './components/home/VenueSection';
import ContactSection from './components/home/ContactSection';

function App() {
  return (
    <div className="app-wrapper">
      <header className="site-header">
        <AnnouncementBar />
        <Navbar />
      </header>
      
      <main>
        <HeroSection />
        <Countdown />
        <StatsSection />
        <AboutSection />
        <ReelFestSection />
        <CulturalEventsSection />
        <CompetitionsSection />
        <ScheduleSection />
        <ArtistsSection />
        <VotingSection />
        <TopPerformancesSection />
        <GallerySection />
        <SponsorsSection />
        <VenueSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
