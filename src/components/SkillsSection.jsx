import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';

// Import icons from react-icons
import { FiFigma } from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineGesture } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Design Tools',
      color: '#5b8def',
      icon: <FiFigma />,
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 70 },
        { name: 'Canva', level: 70 },
      ]
    },
    {
      title: 'UX Research',
      color: '#8b7df5',
      icon: <BiSearchAlt />,
      skills: [
        { name: 'Usability Testing', level: 70 },
        { name: 'Competitive Analysis', level: 80},
        { name: 'A/B Testing', level: 70 }
      ]
    },
    {
      title: 'Prototyping',
      gradient: 'linear-gradient(135deg, #e56b8f 0%, #f5a56b 100%)',
      icon: <MdOutlineGesture />,
      skills: [
        { name: 'Interactive Prototypes', level: 94 },
        { name: 'Micro-interactions', level: 70 },
        { name: 'Design Handoff', level: 92 }
      ]
    },
    {
      title: 'Development',
      color: '#4ade80',
      icon: <FaCode />,
      skills: [
        { name: 'HTML/CSS', level: 88 },
        { name: 'Javascript', level: 50 },
        { name: 'Responsive Design', level: 85 },
      ]
    }
  ];

  return (
    <div className="skills-section section">
      <div className="skills-container container">
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          WHAT I BRING TO THE TABLE
        </motion.p>

        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.p 
          className="section-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          A comprehensive toolkit for creating world-class digital experiences
        </motion.p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ background: category.gradient || category.color }}
                >
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        style={{ background: category.gradient || category.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;