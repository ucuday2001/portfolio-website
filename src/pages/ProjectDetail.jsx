import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../assets/data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === projectId);

  // Forces scroll to top when project page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [projectId]);

  if (!project) {
    return <div>Project not found</div>;
  }


  return (
    <div className="project-detail">
      <button className="back-button" onClick={() => navigate('/')}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </button>

      <div className="project-hero">
        <div className="container">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {project.category}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="project-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              {project.client}
            </div>
            <div className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {project.duration}
            </div>
            <div className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {project.role}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-container container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="hero-image">
            {project.detailImage ? (
              <img
                src={project.detailImage}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
              />
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
              />
            ) : (
              <div className="image-placeholder-large">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <rect width="150" height="150" fill="url(#detail-gradient)" opacity="0.2" />
                  <text x="75" y="85" textAnchor="middle" fill="white" fontSize="60" opacity="0.5">
                    {project.title.charAt(0)}
                  </text>
                  <defs>
                    <linearGradient id="detail-gradient" x1="0" y1="0" x2="150" y2="150">
                      <stop offset="0%" stopColor="#5b8def" />
                      <stop offset="100%" stopColor="#8b7df5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="project-content">
        <div className="content-grid container">
          <div className="content-main">
            <section className="content-section">
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </section>

            <section className="content-section">
              <h2>
                <span className="section-icon">🎯</span>
                The Challenge
              </h2>
              <p>{project.challenge}</p>
            </section>

            <section className="content-section">
              <h2>
                <span className="section-icon">✅</span>
                The Solution
              </h2>
              <p>{project.solution}</p>
            </section>

            {project.process && project.process.length > 0 && (
              <section className="design-process">
                <h2 className="section-main-title">Design Process</h2>
                <p className="section-subtitle-text">From research to implementation</p>

                {project.process.map((step, index) => (
                  <motion.div
                    key={index}
                    className="process-step"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="step-content">
                      <div className="step-header">
                        <div className="step-icon">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                          </svg>
                        </div>
                        <div>
                          <p className="step-number">Step {step.step}</p>
                          <h3>{step.title}</h3>
                        </div>
                      </div>
                      <p>{step.description}</p>
                    </div>
                    <div className="step-visual">
                      <div className="visual-placeholder">
                        Process Visual
                      </div>
                    </div>
                  </motion.div>
                ))}
              </section>
            )}
          </div>

          <div className="content-sidebar">
            <div className="project-info-card">
              <h3>Project Info</h3>
              <div className="info-item">
                <span className="info-label">Client</span>
                <span className="info-value">{project.client}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Duration</span>
                <span className="info-value">{project.duration}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Role</span>
                <span className="info-value">{project.role}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Year</span>
                <span className="info-value">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {project.results && (
        <div className="results-section">
          <div className="container">
            <h2 className="section-main-title">Results & Impact</h2>
            <p className="section-subtitle-text">Measurable outcomes that matter</p>

            <div className="results-grid">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  className="result-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="result-metric gradient-text">{result.metric}</div>
                  <div className="result-label">{result.label}</div>
                  <div className="result-description">{result.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="visual-showcase">
        <div className="container">
          <h2 className="section-main-title">Visual Showcase</h2>

          {project.showcaseImages && project.showcaseImages.length > 0 ? (
            <div className="showcase-grid">
              {project.showcaseImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="showcase-image"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <img src={image} alt={`${project.title} showcase ${index + 1}`} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="showcase-image">
              <div className="showcase-placeholder">
                Design Mockups & Screenshots
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
