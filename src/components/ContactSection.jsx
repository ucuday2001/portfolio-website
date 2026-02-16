import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ContactSection.css';
import { FaBehance, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const SERVICE_ID = 'service_n7cx288';
const TEMPLATE_ID = 'template_4grpfct';
const PUBLIC_KEY = 'eYaiVaYLNTiom2v-Q';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Uday',
        },
        PUBLIC_KEY
      );

      setStatus({ loading: false, success: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ loading: false, success: false, error: true });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 7 10-7" />
        </svg>
      ),
      label: 'Email',
      value: 'ucuday2001@gmail.com'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 7028775977'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Location',
      value: 'Nagpur, Maharashtra'
    }
  ];

  const socialLinks = [
    {
      name: 'Behance',
      url: 'https://www.behance.net/udaychoudhary2',
      icon: <FaBehance />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/uday-choudhary-53b105263/',
      icon: <FaLinkedinIn />
    },
    {
      name: 'Email',
      url: 'mailto:ucuday2001@gmail.com',
      icon: <FaEnvelope />
    }
  ];

  return (
    <div className="contact-section section">
      <div className="contact-container container">
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          LET'S WORK TOGETHER
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Have a project in mind? Let's create something amazing together
        </motion.p>

        <div className="contact-content">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.loading}
              ></textarea>
            </div>

            {/* Success Message */}
            {status.success && (
              <div className="form-success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="form-error">
                ❌ Something went wrong. Please try again!
              </div>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={status.loading}
            >
              {status.loading ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <div className="info-content">
                  <p className="info-label">{info.label}</p>
                  <p className="info-value">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="social-connect">
              <h3>Connect With Me</h3>
              <div className="social-links-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card"
                  >
                    <div className="social-icon">{social.icon}</div>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;