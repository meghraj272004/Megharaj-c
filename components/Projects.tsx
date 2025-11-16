
import React, { useState, useRef } from 'react';
import Section from './common/Section';
import ProjectModal from './common/ProjectModal';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; onCardClick: () => void; }> = ({ project, onCardClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { top, left, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    const rotateX = -((y / height) - 0.5) * 25; // Max rotation
    const rotateY = ((x / width) - 0.5) * 25;  // Max rotation
    const scale = isPressed ? 1.02 : 1.05; // Apply pop effect on press

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s ease-out',
    });
    
    setGlareStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15), transparent 60%)`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out',
    });
  };
  
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onCardClick}
      style={style}
      className="relative rounded-xl border border-brand-primary/20 bg-dark-card p-6 [transform-style:preserve-3d] cursor-pointer"
    >
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={glareStyle}
      />
      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        <img src={project.imageUrl} alt={project.title} className="rounded-lg w-full h-48 object-cover mb-4" style={{ transform: 'translateZ(40px)' }} />
        <h3 className="text-2xl font-bold text-white mb-2" style={{ transform: 'translateZ(30px)' }}>{project.title}</h3>
        <p className="text-gray-400 mb-4 h-20" style={{ transform: 'translateZ(20px)' }}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-brand-primary/20 text-brand-secondary text-xs font-bold px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div
          className="w-full text-center py-2 bg-brand-primary text-white font-semibold rounded-lg"
          style={{ transform: 'translateZ(10px)' }}
        >
          View Case Study
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Section id="projects" title="My Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} onCardClick={() => openModal(project)} />
          ))}
        </div>
      </Section>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default Projects;