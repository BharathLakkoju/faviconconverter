import type { Metadata } from 'next';
import Link from 'next/link';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
    title: 'Free Favicon Generator – Create Favicon from SVG Online',
    description:
        'Generate perfect favicons from SVG files. Multi-size favicon.ico, Apple Touch Icons, Android Chrome icons, and web manifest — all in one package. Free and private.',
    alternates: {
        canonical: '/favicon-generator',
    },
};

export default function FaviconGeneratorPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center mb-10 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 mb-4">
                    🎨 Favicon Generator
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="gradient-text">Favicon Generator</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Create professional favicons from your SVG files. Generate all the icons your website needs in one click.
                </p>
                <Link
                    href="/image-to-favicon-converter"
                    className="inline-flex items-center gap-2 mt-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg glow-button hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    ⚡ Open Converter Tool
                </Link>
            </div>

            <AdPlaceholder slot="banner" className="mb-10" />

            <div className="seo-content">
                <h2>What is a Favicon Generator?</h2>
                <p>
                    A favicon generator is a tool that creates the small icons (favicons) that appear in browser tabs, bookmarks,
                    and app launchers. Our favicon generator takes your SVG source file and produces all the icon sizes and formats
                    needed for modern websites, including ICO, PNG, Apple Touch Icons, and Android Chrome icons.
                </p>
                <p>
                    Unlike basic converters that only produce a single 16×16 icon, our generator creates a complete favicon
                    package with all the sizes needed for full cross-platform compatibility. This includes the traditional
                    multi-resolution <code>favicon.ico</code>, individual PNGs for HTML link tags, and a{' '}
                    <code>site.webmanifest</code> for Progressive Web Apps.
                </p>

                <h2>Why SVG is the Best Source for Favicons</h2>
                <p>
                    SVG (Scalable Vector Graphics) produces the highest quality favicons because vector graphics can be rendered
                    at any resolution without quality loss. When you start with an SVG source:
                </p>
                <ul>
                    <li>Every size renders with pixel-perfect clarity</li>
                    <li>Complex gradients and shapes are preserved</li>
                    <li>Transparency is maintained across all output formats</li>
                    <li>A single source file produces unlimited sizes</li>
                    <li>Future-proof for high-DPI displays</li>
                </ul>

                <h2>Complete Favicon Package Contents</h2>
                <p>
                    Our generator produces a downloadable ZIP file containing everything you need:
                </p>
                <ul>
                    <li><strong>favicon.ico</strong> — Multi-resolution ICO file (16×16, 32×32, 48×48)</li>
                    <li><strong>favicon-16x16.png</strong> — Standard browser tab icon</li>
                    <li><strong>favicon-32x32.png</strong> — Higher resolution tab icon</li>
                    <li><strong>apple-touch-icon.png</strong> — 180×180 icon for iOS home screen</li>
                    <li><strong>android-chrome-192x192.png</strong> — Android launcher icon</li>
                    <li><strong>android-chrome-512x512.png</strong> — PWA splash screen icon</li>
                    <li><strong>site.webmanifest</strong> — Web app manifest configuration</li>
                    <li><strong>favicon-snippet.html</strong> — Ready-to-paste HTML tags</li>
                </ul>

                <h2>How to Use the Favicon Generator</h2>
                <p>Creating your favicon package takes just a few steps:</p>
                <ul>
                    <li><strong>Step 1:</strong> Upload your SVG file or paste SVG code directly</li>
                    <li><strong>Step 2:</strong> Select which favicon sizes you need (all are pre-selected)</li>
                    <li><strong>Step 3:</strong> Click &ldquo;Convert to Favicon&rdquo; to generate all sizes</li>
                    <li><strong>Step 4:</strong> Preview your favicons in a simulated browser tab</li>
                    <li><strong>Step 5:</strong> Download the complete package or just the ICO file</li>
                    <li><strong>Step 6:</strong> Copy the HTML snippet and paste it into your project</li>
                </ul>

                <h2>Privacy First</h2>
                <p>
                    Your SVG files are processed entirely in your browser using the Canvas API. Nothing is uploaded to any server.
                    Your designs remain completely private — we never see, store, or transmit your files.
                </p>

                <h2>Framework Integration Guides</h2>
                <p>
                    Need help integrating favicons into your specific framework? Check out our detailed guides:
                </p>
                <ul>
                    <li>
                        <Link href="/favicon-generator-nextjs" className="text-violet-400 hover:underline">
                            Favicon Generator for Next.js
                        </Link>
                    </li>
                    <li>
                        <Link href="/favicon-generator-react" className="text-violet-400 hover:underline">
                            Favicon Generator for React Apps
                        </Link>
                    </li>
                    <li>
                        <Link href="/how-to-create-favicon" className="text-violet-400 hover:underline">
                            Complete Guide: How to Create a Favicon
                        </Link>
                    </li>
                </ul>

                <AdPlaceholder slot="inline" className="my-8" />

                <h2>Common Favicon Mistakes to Avoid</h2>
                <ul>
                    <li><strong>Using only 16×16:</strong> Modern platforms need multiple sizes for best results</li>
                    <li><strong>Ignoring Apple devices:</strong> Always include the 180×180 apple-touch-icon</li>
                    <li><strong>Complex designs:</strong> Keep it simple — favicons are viewed at very small sizes</li>
                    <li><strong>No transparency:</strong> Your favicon may appear on various colored backgrounds</li>
                    <li><strong>Missing web manifest:</strong> PWA users won&apos;t see your app icon without one</li>
                    <li><strong>Using JPG:</strong> JPG doesn&apos;t support transparency — always use PNG or SVG</li>
                </ul>

                <h2>Start Creating Your Favicon</h2>
                <p>
                    Ready to generate your favicon? Head to our{' '}
                    <Link href="/image-to-favicon-converter" className="text-violet-400 hover:underline">
                        faviconverter
                    </Link>{' '}
                    to get started. It&apos;s free, fast, and your files stay completely private.
                </p>
            </div>
        </div>
    );
}
