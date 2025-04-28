import React from 'react';
import { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-darker text-gray-100 font-sans overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Experience setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;