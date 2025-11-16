// FIX: Add import for React to resolve 'Cannot find namespace 'React'' error.
import type React from 'react';

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    techStack: string[];
    learnings: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatarUrl: string;
}