import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';
import myImg from '../components/images/my-img.jpg'; // Correct path

const AboutSection = () => {
  const skills = ['Design Systems', 'UX Research', 'Prototyping', 'AI Integration', 'UI Design', 'FrontEnd Technology'];

  return (
    <div className="about-section section">
      <div className="about-container container">
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          GET TO KNOW ME
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
          <div className="title-underline"></div>
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image">
              <div className="image-placeholder">
                <img src={myImg} alt="Uday Choudhary" />
              </div>
            </div>
            <div className="experience-badge">
              <div className="badge-number">1+</div>
              <div className="badge-text">Years Experience</div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Designing digital products that <span className="gradient-text">work as good as they look</span></h3>

            <p>
              UI/UX designer with 1+ years of experience designing impactful digital products. Currently full-time at a private company, I've worked across dating/matrimony platforms, SaaS applications, and ERP-like systems—creating user-centered interfaces that balance functionality with aesthetics.
            </p>

            <p>
              I approach each project with research-driven insights and iterative design thinking, transforming complex workflows into intuitive experiences that users appreciate and businesses value.           
            </p>

            <div className="skills-tags">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;