import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../assets/data/projects';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <div className="projects-section section">
      <div className="projects-container container">
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          FEATURED WORK
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Explore how I've helped companies transform their digital products through thoughtful design and user research
        </motion.p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Link to={`/project/${project.id}`} className="project-card">
                <div className="project-image">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                    />
                  ) : (
                    <div className="project-image-placeholder">
                      <svg width="100" height="100" viewBox="0 0 100 100">
                        <rect width="100" height="100" fill="url(#project-gradient-{index})" opacity="0.2"/>
                        <text x="50" y="55" textAnchor="middle" fill="white" fontSize="40" opacity="0.5">
                          {project.title.charAt(0)}
                        </text>
                        <defs>
                          <linearGradient id={`project-gradient-${index}`} x1="0" y1="0" x2="100" y2="100">
                            <stop offset="0%" stopColor="#5b8def" />
                            <stop offset="100%" stopColor="#8b7df5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;