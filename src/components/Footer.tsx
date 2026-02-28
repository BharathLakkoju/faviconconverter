import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-border bg-surface">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl overflow-hidden">
                                <img src="/logo.ico" alt="Favicon Converter" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-base font-bold text-foreground">
                                favicon<span className="text-violet-600 dark:text-violet-400">verter</span>
                            </span>
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                            Free, private, client-side faviconverter. Generate website icons from PNG, SVG, JPEG, WebP and more.
                        </p>
                    </div>

                    {/* Tools */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Tools</h4>
                        <ul className="space-y-2">
                            {[
                                { href: '/image-to-favicon-converter', label: 'faviconverter' },
                                { href: '/favicon-generator', label: 'Favicon Generator' },
                                { href: '/svg-to-favicon', label: 'PNG to Favicon' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Guides */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Guides</h4>
                        <ul className="space-y-2">
                            {[
                                { href: '/how-to-create-favicon', label: 'How to Create Favicon' },
                                { href: '/favicon-generator-nextjs', label: 'Favicon for Next.js' },
                                { href: '/favicon-generator-react', label: 'Favicon for React' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
                        <ul className="space-y-2">
                            {[
                                { href: '/privacy-policy', label: 'Privacy Policy' },
                                { href: '/terms-of-service', label: 'Terms of Service' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-muted">
                        © {new Date().getFullYear()} faviconverter. All rights reserved.
                    </p>
                    <p className="text-xs text-muted flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        No files uploaded — 100% client-side
                    </p>
                </div>
            </div>
        </footer>
    );
}
