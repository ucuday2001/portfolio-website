import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseMe from '../components/WhyChooseMe';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import CoreCompetencies from '../components/CoreCompetencies';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
        <WhyChooseMe />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="skills">
        <SkillsSection />
        <CoreCompetencies />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
