
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark-bg via-dark-bg to-[#0f0c29] -z-10" />
      <div className="absolute top-[20%] left-[10%] w-48 h-48 bg-brand-primary rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-brand-accent rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
