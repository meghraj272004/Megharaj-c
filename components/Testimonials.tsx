import React from 'react';
import Section from './common/Section';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className="flex-shrink-0 w-80 md:w-96 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-white mx-4">
            <div className="flex items-center mb-4">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-brand-secondary" />
                <div className="ml-4">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-brand-secondary">{testimonial.title}, {testimonial.company}</p>
                </div>
            </div>
            <p className="text-gray-300 italic">"{testimonial.quote}"</p>
        </div>
    );
};

const Testimonials: React.FC = () => {
    if (TESTIMONIALS.length === 0) {
        return null;
    }

    const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <Section id="testimonials" title="What Others Say" className="bg-dark-card/50">
            <div className="relative w-full overflow-hidden group">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-bg to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-bg to-transparent z-10" />
                <div className="flex animate-scroll-carousel group-hover:[animation-play-state:paused]">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;