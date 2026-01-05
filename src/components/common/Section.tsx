'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string; // Allow additional classes if needed
    id?: string;
    bg?: 'white' | 'gray' | 'none'; // Simple background control
}

export function Section({ children, className = '', id, bg = 'white' }: SectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before it's fully in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.disconnect();
            }
        };
    }, []);

    const bgClass = bg === 'gray' ? 'bg-background' : bg === 'white' ? 'bg-white' : '';

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`w-full py-16 md:py-24 ${bgClass} ${className}`}
        >
            <div className={`max-w-screen-xl mx-auto px-6 md:px-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                {children}
            </div>
        </section>
    );
}
