
import React from 'react';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-dark-card border border-brand-primary/20 rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s ease-out forwards' }}
      >
        <style>{`
          @keyframes fade-in-scale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent mb-4">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            &times;
          </button>
        </div>

        <img src={project.imageUrl} alt={project.title} className="rounded-lg w-full h-64 object-cover mb-6" />

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">The Problem</h3>
            <p className="text-gray-300">{project.caseStudy.problem}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">The Solution</h3>
            <p className="text-gray-300">{project.caseStudy.solution}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.techStack.map((tech) => (
                <span key={tech} className="bg-brand-primary/20 text-brand-secondary text-sm font-medium px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Key Learnings</h3>
            <p className="text-gray-300">{project.caseStudy.learnings}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-4">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">GitHub</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-2 px-4 rounded-lg transition-colors">Live Site</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
