
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center ${className}`}>
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
