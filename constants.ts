import type { Project, Testimonial, ExperienceItem, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Megharaj C",
  title: "Full-Stack Developer & AI Enthusiast",
  email: "meghraj272004@gmail.com",
  socials: {
    github: "https://github.com/meghraj-c",
    linkedin: "https://www.linkedin.com/in/meghraj-c-45082b29b/",
    twitter: "#", // Placeholder, will be hidden in component
  },
};

export const SKILLS: Skill[] = [
  { name: "Python", level: 90 },
  { name: "Artificial Intelligence & ML", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js & Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "HTML & CSS", level: 80 },
  { name: "Docker", level: 70 },
  { name: "Flask", level: 70 },
];

export const PROJECTS: Project[] = [
  {
    title: "Arc - AI Agent",
    description: "Developed an AI chat agent 'Arc' using Gemini API to answer user queries in real time. Features a RESTful backend with Node.js, Express, JWT and MongoDB for conversation history.",
    tags: ["AI", "Web Apps", "Full Stack", "Gemini API"],
    imageUrl: "https://picsum.photos/seed/arcai/800/600",
    liveUrl: "https://arc-ai-agent.vercel.app",
    githubUrl: "https://github.com/meghraj-c/arc-ai-agent",
    caseStudy: {
      problem: "Users need immediate and intelligent answers to their queries in real-time.",
      solution: "Built 'Arc', an AI chat agent using the Gemini API for real-time query resolution. The system includes a robust RESTful backend with Node.js, Express, and JWT for secure authentication, and integrates MongoDB for session management and conversation history. The responsive React frontend ensures a smooth chat UI.",
      techStack: ["Gemini API", "React", "Node.js", "Express", "JWT", "MongoDB"],
      learnings: "Achieved a 25% faster response time and 15% higher user retention, highlighting the impact of real-time AI and a well-structured full-stack architecture."
    }
  },
  {
    title: "Tea Chalk - Microteaching Platform",
    description: "An AI-integrated micro-teaching platform to make learning faster and smarter. It allows users to share and consume short, topic-focused lessons with intelligent recommendations.",
    tags: ["AI", "Web Apps", "Python", "NLP"],
    imageUrl: "https://picsum.photos/seed/teachalk/800/600",
    liveUrl: "https://tea-chalk.vercel.app",
    githubUrl: "https://github.com/meghraj-c/tea-chalk-platform",
    caseStudy: {
      problem: "Modern learners require accessible, bite-sized, and personalized educational content.",
      solution: "Developed 'Tea Chalk', an AI-powered platform for micro-teaching. It uses Python and AI features to personalize content and suggest relevant topics. Integrated NLP tools summarize lessons to enhance discoverability, and backend functionalities manage users, content, and AI workflows efficiently, fostering community-led learning.",
      techStack: ["Python", "NLP", "React", "Flask"],
      learnings: "Successfully created a platform that encourages community-led teaching and promotes bite-sized learning for modern audiences."
    }
  },
  {
    title: "Customer Churn Prediction App",
    description: "A web app that predicts customer churn using machine learning. It provides dashboards to show risk probability and actions.",
    tags: ["Machine Learning", "Web Apps", "Data Science"],
    imageUrl: "https://picsum.photos/seed/churn/800/600",
    liveUrl: "https://churn-predictor.vercel.app",
    githubUrl: "https://github.com/meghraj-c/customer-churn-prediction",
    caseStudy: {
      problem: "Businesses need to proactively identify customers who are likely to churn to take retention actions.",
      solution: "Developed a web application that uses a Gradient Boosting machine learning model to predict customer churn. The app presents risk scores and probabilities through an interactive dashboard. The backend is built with Flask and deployed with Docker, while the frontend uses React for real-time data visualization.",
      techStack: ["Python", "Machine Learning", "Flask", "Docker", "React"],
      learnings: "Achieved an 18% reduction in customer churn within 3 months, demonstrating the business value of predictive analytics and machine learning."
    }
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Sanna Innovations",
    role: "AI Research Intern",
    period: "07/2025 - 10/2025",
    description: "Contributed to lead-generation automation by building AI agents for prospecting, cold outreach, and workflow optimization.",
    achievements: [
      "Worked on cold calls, cold emails, and understanding real client acquisition pipelines.",
      "Gained hands-on experience in applied AI, sales tech, and automation solutions."
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [];