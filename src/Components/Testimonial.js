import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
    return (
        <section id='testimonials' className='section bg-tertiary'>
            <div className='container mx-auto'>
                 <div className='flex flex-col items-center text-center'>
                 <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-100
                 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>What Other People Say
                 </h2>
                 <p className='subtitle'>You can also use variant modifiers to target media queries like
                responsive breakpoints, dark mode, prefers-reduced-motion, and
                more. For example, use md:before:content-['Desktop'] to apply
                the before:content</p>
                 </div>
                 <TestimonialSlider></TestimonialSlider>
            </div>
        </section>
    );
};

export default Testimonial;