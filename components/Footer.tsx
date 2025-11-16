import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-8 lg:px-16 border-t border-brand-primary/20 text-center text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
            <svg className="h-8 w-8 text-brand-secondary animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold text-lg">Megharaj C</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Megharaj C. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;