import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section">

      <div className="hero-container container">
        <motion.div
          className="hero-icons"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="hero-icon" style={{ background: 'linear-gradient(135deg, #2d4a6f 0%, #3a5d8f 100%)' }}>
            <span class="material-symbols-outlined">
              neurology
            </span>
          </div>
          <div className="hero-icon" style={{ background: 'linear-gradient(135deg, #6b3da3 0%, #8b5dc7 100%)' }}>
            <span class="material-symbols-outlined">
              design_services
            </span>
          </div>
          <div className="hero-icon" style={{ background: 'linear-gradient(135deg, #2a7a7a 0%, #3ba9a3 100%)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          UI/UX DESIGNER & Frontend Developer
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Uday Choudhary
        </motion.h1>

        <motion.h2
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Crafting <span className="gradient-text">Meaningful</span> Digital Experiences
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Bridging human intuition with thoughtful UI/UX design to create seamless, user-centered digital experiences.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button className="btn-primary" onClick={() => scrollToSection('projects')}>
            View My Work
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('about')}>
            Learn More About Me
          </button>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </div>
  );
};

export default HeroSection;
