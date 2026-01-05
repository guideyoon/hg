'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
    {
        label: '한결 소개',
        href: '/about',
        subItems: [
            { label: 'CEO', href: '/about#ceo' },
            { label: '전문분야', href: '/about#specialty' },
            { label: '강사진', href: '/about#instructors' },
        ]
    },
    { label: '서비스', href: '/services' },
    { label: 'VIP 코스', href: '/vip' },
    { label: '자격증 과정', href: '/education' },
    { label: '문의', href: '/contact' },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-foreground/10">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-lg md:text-xl font-bold tracking-tight text-foreground" onClick={() => setIsMenuOpen(false)}>
                    한결 패션이미지연구소
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.href} className="relative group">
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
                            >
                                {item.label}
                            </Link>

                            {/* Dropdown for items with subItems */}
                            {item.subItems && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                                    <div className="bg-white border border-gray-100 shadow-lg rounded-sm py-2 min-w-[120px] flex flex-col">
                                        {item.subItems.map(sub => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-accent text-center whitespace-nowrap transition-colors"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-foreground/10 py-4 px-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-base font-medium text-foreground py-2 border-b border-foreground/5 last:border-0"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
