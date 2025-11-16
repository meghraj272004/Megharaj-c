
import React from 'react';
import Section from './common/Section';
import { SKILLS, EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience & Skills">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Skills */}
        <div className="bg-dark-card p-6 rounded-lg border border-brand-primary/20">
          <h3 className="text-3xl font-bold mb-6 text-white text-center">Core Competencies</h3>
          <div className="space-y-4">
            {SKILLS.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-300">{skill.name}</span>
                  <span className="text-sm font-medium text-brand-secondary">{skill.level}%</span>
                </div>
                <div className="w-full bg-brand-primary/20 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-brand-secondary to-brand-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-brand-primary/30 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-brand-secondary after:border-4 after:box-content after:border-dark-bg after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-brand-secondary bg-brand-primary/20 rounded-full">{item.period}</time>
                <div className="text-xl font-bold text-white">{item.role}</div>
              </div>
              <div className="text-brand-accent font-semibold mb-2">{item.company}</div>
              <div className="text-gray-400">{item.description}</div>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                {item.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
