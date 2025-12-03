import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ProblemStatement from './components/ProblemStatement';
import Architecture from './components/Architecture';
import Technologies from './components/Technologies';
import Benefits from './components/Benefits';
import Team from './components/Team';
import Conclusion from './components/Conclusion';
import Location from './components/Location';
import Navigation from './components/Navigation';
import ContactForm from './components/ContactForm';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const handleExploreFeatures = () => {
    scrollToSection('benefits');
  };

  const handleViewLocation = () => {
    scrollToSection('location');
  };

  const handleGetStarted = () => {
    scrollToSection('about');
  };

  const handleLearnMore = () => {
    scrollToSection('technologies');
  };

  const handleOpenContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <section id="home">
          <Hero
            onExploreFeatures={handleExploreFeatures}
            onViewLocation={handleViewLocation}
          />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="problem">
          <ProblemStatement />
        </section>

        <section id="architecture">
          <Architecture />
        </section>

        <section id="technologies">
          <Technologies />
        </section>

        <section id="benefits">
          <Benefits />
        </section>

        <section id="location">
          <Location />
        </section>

        <section id="team">
          <Team />
        </section>

        <section id="conclusion">
          <Conclusion
            onGetStarted={handleGetStarted}
            onLearnMore={handleLearnMore}
            onOpenContactForm={handleOpenContactForm}
          />
        </section>
      </main>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Smart Waste Management Portal | ITM Vocational University
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Building Cleaner and Smarter Cities
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
