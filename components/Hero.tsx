import React from 'react';
import { PERSONAL_INFO } from '../constants';

const SKILL_CLOUD = [
  'React', 'Python', 'Node.js', 'AI/ML', 'Gemini API', 'MongoDB', 
  'Docker', 'Flask', 'NLP', 'Express', 'JWT', 'TypeScript'
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Particle background */}
        <div id="particle-container" className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-brand-primary/50"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-move ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes particle-move {
            0% { transform: translate(0, 0); opacity: 1; }
            100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); opacity: 0; }
          }
        `}</style>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4">
        <div className="text-center md:text-left">
          <div className="inline-block overflow-hidden">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white animate-text-reveal">
              Hello, I'm
            </h1>
          </div>
          <div className="inline-block overflow-hidden mt-2">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent animate-text-reveal" style={{ animationDelay: '0.7s' }}>
              {PERSONAL_INFO.name}
            </h1>
          </div>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
            {PERSONAL_INFO.title}
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20Inquiry`}
              className="px-6 py-3 font-semibold text-white bg-brand-primary rounded-lg shadow-lg hover:bg-brand-primary/80 transition-transform transform hover:scale-105 active:scale-95">
              Hire Me
            </a>
            <a href="#projects" className="px-6 py-3 font-semibold text-white bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-transform transform hover:scale-105 active:scale-95">
              View Work
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center h-96">
          {/* Central Orb */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent animate-float">
            <div className="absolute inset-0 rounded-full bg-dark-bg/50 backdrop-blur-sm"></div>
            <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
          </div>
          
          {/* Rotating Skill Cloud */}
          <div className="absolute w-full h-full">
            {SKILL_CLOUD.map((skill, index) => {
              const angle = (index / SKILL_CLOUD.length) * 2 * Math.PI;
              const radius = 180; // in pixels
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const rotation = angle * (180 / Math.PI);

              return (
                <div
                  key={skill}
                  className="absolute top-1/2 left-1/2 -mt-4 -ml-12"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                    animation: `orbit ${SKILL_CLOUD.length * 2}s linear infinite`,
                    animationDelay: `-${index * 2}s`,
                  }}
                >
                  <span className="text-gray-300 bg-dark-card/70 px-3 py-1 rounded-full text-sm backdrop-blur-sm" style={{ transform: `rotate(-${rotation}deg)` }}>
                    {skill}
                  </span>
                </div>
              );
            })}
            <style>{`
              @keyframes orbit {
                from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
                to { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;