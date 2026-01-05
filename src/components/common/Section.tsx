import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string; // Allow additional classes if needed
    id?: string;
    bg?: 'white' | 'gray'; // Simple background control
}

export function Section({ children, className = '', id, bg = 'white' }: SectionProps) {
    const bgClass = bg === 'gray' ? 'bg-background' : 'bg-white'; // wait, background is off-white (F9F9F7).
    // Actually, 'bg-background' is F9F9F7. 'bg-white' is pure white.
    // The design might need alternating sections or mostly off-white?
    // PRD says "Off-white, Warm Gray, Deep Charcoal".
    // Let's use bg-background as default.

    return (
        <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                {children}
            </div>
        </section>
    );
}
