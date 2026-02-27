'use client';

import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-xl overflow-hidden shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
                            <img src="/logo.ico" alt="Favicon Converter" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-base font-bold text-foreground hidden sm:block">
                            Favicon<span className="text-violet-600 dark:text-violet-400">Converter</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                        {[
                            { href: '/svg-to-ico-converter', label: 'Converter' },
                            { href: '/favicon-generator', label: 'Favicon Generator' },
                            { href: '/how-to-create-favicon', label: 'Guide' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-lg px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-surface transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            className="rounded-lg p-2 text-muted hover:text-foreground hover:bg-surface transition-all"
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                            className="md:hidden rounded-lg p-2 text-muted hover:text-foreground hover:bg-surface transition-all"
                        >
                            {mobileOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <nav className="md:hidden border-t border-border py-3 space-y-1" aria-label="Mobile navigation">
                        {[
                            { href: '/svg-to-ico-converter', label: 'Converter' },
                            { href: '/favicon-generator', label: 'Favicon Generator' },
                            { href: '/how-to-create-favicon', label: 'Guide' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:text-foreground hover:bg-surface transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
