import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseMe.css';

const WhyChooseMe = () => {
  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: 'Problem Solver',
      description: 'I thrive on turning complex challenges into intuitive solutions'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'User-Centered',
      description: 'Every design decision is backed by research and user empathy'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v6"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 22v-6"/>
          <path d="M4 12H2"/>
          <path d="M22 12h-2"/>
        </svg>
      ),
      title: 'Innovation First',
      description: 'Pushing boundaries with AI-driven and cutting-edge design'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 15l5 3.5-1.5-5.5L20 8.5l-5.5-.5L12 2.5 9.5 8 4 8.5l4.5 4.5L7 18.5z"/>
        </svg>
      ),
      title: 'Excellence Driven',
      description: 'Delivering pixel-perfect designs that exceed expectations'
    }
  ];

  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
