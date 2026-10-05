import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JourneyIntro from './components/JourneyIntro';
import ProjectTimeline from './components/ProjectTimeline';
import FeaturedDevaSetu from './components/FeaturedDevaSetu';
import AIProjectSection from './components/AIProjectSection';
import TechConstellation from './components/TechConstellation';
import EvolutionSection from './components/EvolutionSection';
import StatsSection from './components/StatsSection';
import DeploymentWall from './components/DeploymentWall';
import InternshipContext from './components/InternshipContext';
import AboutMe from './components/AboutMe';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#05070D] text-[#F8FAFC] selection:bg-[#7C3AED]/30 selection:text-white">
      {/* Top Floating Navbar */}
      <Navbar />

      <main>
        {/* 1. Hero with 3D Orbital Universe */}
        <Hero onSelectProject={setSelectedProject} />

        {/* 2. Journey Introduction: From Learning to Building */}
        <JourneyIntro />

        {/* 3. Main Project Experience: The 12-Week Build Journey */}
        <ProjectTimeline onSelectProject={setSelectedProject} />

        {/* 4. Technology Constellation: Interactive Stack Network */}
        <TechConstellation onSelectProject={setSelectedProject} />

        {/* 5. Development Evolution: 4-Stage Growth Arc */}
        <EvolutionSection />

        {/* 6. Project Statistics */}
        <StatsSection />

        {/* 7. Featured Project: DevaSetu MERN SaaS Showcase */}
        <FeaturedDevaSetu onSelectProject={setSelectedProject} />

        {/* 8. AI Project Feature: Prescription Scanner */}
        <AIProjectSection onSelectProject={setSelectedProject} />

        {/* 9. Deployment Wall: From Code to Production */}
        <DeploymentWall />

        {/* 10. Internship Context: 12 Weeks at GWC Data.ai */}
        <InternshipContext onSelectProject={setSelectedProject} />

        {/* 11. About Me */}
        <AboutMe />

        {/* 12. Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
