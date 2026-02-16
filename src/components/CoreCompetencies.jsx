import React from 'react';
import { motion } from 'framer-motion';
import './CoreCompetencies.css';

const CoreCompetencies = () => {
  const competencies = [
    { name: 'Figma', icon: 'F' },
    { name: 'Design Systems', icon: 'DS' },
    { name: 'Prototyping', icon: 'P' },
    { name: 'UI Design', icon: 'UI' },
    { name: 'UX Design', icon: 'UX' },
    { name: 'Brand Design', icon: 'BD' }
  ];

  const stats = [
    { number: '3+', label: 'Projects Completed' },
    { number: '5+', label: 'Design Completed' },
    { number: '100%', label: 'Avg Engagement Increase' }
  ];

  return (
    <div className="core-competencies-section">
      <div className="container">
        <motion.h2 
          className="competencies-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Core Competencies
        </motion.h2>

        <div className="competencies-grid">
          {competencies.map((comp, index) => (
            <motion.div
              key={index}
              className="competency-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="competency-icon">{comp.icon}</div>
              <span>{comp.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
            >
              <div className="stat-number gradient-text">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
