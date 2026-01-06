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
        <header className="sticky top-0 z-50 w-full bg-white border-b border-foreground/10">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo.webp" alt="한결 패션이미지연구소" className="h-10 md:h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.href} className="relative group">
                            <Link
                                href={item.href}
                                className="text-base font-semibold text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
                            >
                                {item.label}
                            </Link>

                            {/* Dropdown for items with subItems */}
                            {item.subItems && (
                                <div className="absolute top-full left-0 pt-1 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                                    <div className="flex gap-8 whitespace-nowrap py-1 px-1">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className="text-sm font-medium text-foreground/60 hover:text-accent transition-colors"
                                            >
                                                {subItem.label}
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
            {/* Mobile Nav Drawer */}
            <div className={`md:hidden absolute top-16 left-0 w-full bg-background border-b border-foreground/10 py-4 px-6 flex flex-col gap-4 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                {NAV_ITEMS.map((item) => (
                    <div key={item.href}>
                        <Link
                            href={item.href}
                            className="text-base font-medium text-foreground py-2 border-b border-foreground/5 last:border-0 block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                        {/* Mobile Submenu Items (if any) */}
                        {item.subItems && (
                            <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-foreground/10">
                                {item.subItems.map((subItem) => (
                                    <Link
                                        key={subItem.href}
                                        href={subItem.href}
                                        className="text-sm text-gray-500 hover:text-accent py-1 block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </header>
    );
}
