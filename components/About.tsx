import React from 'react';
import Section from './common/Section';

const tools = [
    "Python", "React", "Node.js", "MongoDB", "Docker", "Git", "Canva", "Framer", "Power BI"
];

const achievements = [
    "1st prize in National Level Karate Tournament",
    "Best Student Award in 10th Standard",
    "Co-founder of GITXTRIBE tech club",
    "Participation certificate in JSS NAVOTHANA (24-HR HACKATHON)",
    "Participation certificate in intercollegiate INNOVEX 2023 (12HRS HACKATHON)",
];

const education = [
    {
        degree: "BCA (Computer Applications)",
        institution: "K.L.E. Society's Degree College",
        period: "2023 - 2026",
        details: "Board/University: Bangalore University. Mark: 7.81"
    },
    {
        degree: "Senior Secondary (XII)",
        institution: "KLE Nijalingappa Independent PU College",
        period: "2023",
        details: "Board: Karnataka State Board. Mark: 72.66%"
    },
    {
        degree: "Secondary School (X)",
        institution: "Vishnu International Public School",
        period: "2021",
        details: "Board: Karnataka State Board. Mark: 72.33%"
    },
]

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Education Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-secondary before:to-transparent">
            <h3 className="text-3xl font-bold mb-6 text-white text-center lg:text-left">Education</h3>
            {education.map((item, index) => (
                 <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-brand-secondary bg-dark-card text-brand-secondary group-hover:scale-110 transition-transform shadow-lg">{index + 1}</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-dark-card p-4 rounded-lg border border-brand-primary/20 ml-4 md:ml-0 shadow-lg">
                        <h4 className="font-semibold text-white">{item.degree}</h4>
                        <p className="text-sm text-brand-secondary/80">{item.institution} ({item.period})</p>
                        <p className="text-sm text-gray-400">{item.details}</p>
                    </div>
                </div>
            )).reverse()}
        </div>

        {/* Achievements & Tools */}
        <div className="space-y-8">
             <div className="bg-dark-card p-6 rounded-lg border border-brand-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Career Objective</h3>
                <p className="text-gray-300 italic">"To start my career as a technical person in the software field by applying my technical knowledge and skills in a learning environment to contribute to the growth of the organization."</p>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border border-brand-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Achievements & Activities</h3>
                <ul className="space-y-2">
                   {achievements.map((ach, i) => (
                       <li key={i} className="flex items-start">
                         <svg className="w-4 h-4 mr-2 text-brand-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                         <span className="text-gray-300">{ach}</span>
                       </li>
                   ))}
                </ul>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border border-brand-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                    {tools.map(tool => (
                        <span key={tool} className="bg-brand-primary/20 text-brand-secondary text-sm font-medium px-4 py-2 rounded-lg hover:bg-brand-primary/40 transition-colors cursor-default">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;