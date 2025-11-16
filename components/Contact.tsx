
import React, { useState } from 'react';
import Section from './common/Section';
import { PERSONAL_INFO } from '../constants';

const SocialLink: React.FC<{ href: string; children: React.ReactNode; }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-all duration-300 transform hover:[filter:drop-shadow(0_0_8px_#ec4899)] hover:[transform:scale(1.1)_translateZ(20px)] active:[transform:scale(1.05)_translateZ(15px)]">
        {children}
    </a>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mockApiCall = (data: typeof formData) => {
    console.log("Simulating API call with data:", data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.message.toLowerCase().includes("error")) {
          reject(new Error("Simulated server error."));
        } else {
          resolve({ success: true });
        }
      }, 1500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending' || status === 'success') return;
    setStatus('sending');

    try {
      await mockApiCall(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus('error');
    }
  };

  const getButtonText = () => {
    switch (status) {
        case 'sending': return 'Sending...';
        case 'success': return 'Message Sent!';
        case 'error': return 'Try Again';
        default: return 'Send Message';
    }
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-dark-card p-8 rounded-lg border border-brand-primary/20">
            <p className="text-lg text-gray-300 mb-6">
                I'm actively looking for opportunities and open to discussing new projects. Feel free to reach out through the form or connect with me on social media.
            </p>
            <div className="space-y-4 mb-8">
                <p className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-brand-secondary transition-colors">{PERSONAL_INFO.email}</a>
                </p>
                <p className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>+91 6364795623</span>
                </p>
                 <p className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>Bangalore, India</span>
                </p>
            </div>
            <div className="flex space-x-6 [perspective:800px]">
                <SocialLink href={PERSONAL_INFO.socials.github}><svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></SocialLink>
                <SocialLink href={PERSONAL_INFO.socials.linkedin}><svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg></SocialLink>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={`space-y-4 transition-opacity duration-500 ${status === 'success' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full bg-dark-card border border-brand-primary/20 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all focus:scale-[1.01]" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full bg-dark-card border border-brand-primary/20 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all focus:scale-[1.01]" />
            <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-dark-card border border-brand-primary/20 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all focus:scale-[1.01]"></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 font-semibold text-white bg-brand-primary rounded-lg shadow-lg hover:bg-brand-primary/80 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={status === 'sending' || status === 'success'}>
            {status === 'sending' && (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
             {status === 'success' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            )}
             {status === 'error' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            )}
            {getButtonText()}
          </button>
          <div className="h-5 text-center text-sm">
            {status === 'success' && <p className="text-green-400 animate-fade-in-up">Thank you! Your message has been sent.</p>}
            {status === 'error' && <p className="text-red-400 animate-fade-in-up">Something went wrong. Please try again.</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;