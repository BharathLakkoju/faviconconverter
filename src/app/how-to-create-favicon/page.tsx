import type { Metadata } from 'next';
import Link from 'next/link';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
    title: 'How to Create a Favicon – Complete Step-by-Step Guide (2026)',
    description:
        'Learn how to create a favicon for your website from scratch. Covers design tips, sizes, formats, HTML integration, and deployment. Updated for 2026.',
    alternates: {
        canonical: '/how-to-create-favicon',
    },
    openGraph: {
        title: 'How to Create a Favicon – Complete Step-by-Step Guide (2026)',
        description:
            'Learn how to create a favicon for your website from scratch. Covers design tips, sizes, formats, HTML integration, and deployment. Updated for 2026.',
        url: '/how-to-create-favicon',
        type: 'article',
        locale: 'en_US',
        siteName: 'faviconverter',
        images: ['/og-image.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How to Create a Favicon – Complete Step-by-Step Guide (2026)',
        description:
            'Learn how to create a favicon for your website from scratch. Covers design tips, sizes, formats, HTML integration, and deployment. Updated for 2026.',
        images: ['/og-image.png'],
    },
};

export default function HowToCreateFaviconPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center mb-10 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-4">
                    📖 Complete Guide
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="gradient-text">How to Create a Favicon</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    A comprehensive, step-by-step guide to creating favicons for your website — from design to deployment.
                </p>
            </div>

            <AdPlaceholder slot="banner" className="mb-10" />

            <div className="seo-content">
                <h2>Step 1: Design Your Icon</h2>
                <p>
                    Your favicon is one of the most important visual elements of your brand on the web. Even though it&apos;s
                    small, it&apos;s seen constantly — in browser tabs, bookmarks, and search results. Follow these design
                    principles:
                </p>
                <ul>
                    <li><strong>Keep it simple:</strong> At 16×16 pixels, fine details are lost. Use bold, recognizable shapes.</li>
                    <li><strong>Use your brand:</strong> A simplified version of your logo, a letter, or an icon that represents your brand works best.</li>
                    <li><strong>Consider backgrounds:</strong> Design for both light and dark browser themes. Test on both.</li>
                    <li><strong>Use vectors:</strong> Design in SVG format in a tool like Figma, Illustrator, or Inkscape for maximum quality.</li>
                    <li><strong>Test at small sizes:</strong> Preview your design at 16×16 and 32×32 before finalizing.</li>
                </ul>

                <h2>Step 2: Choose Your Sizes</h2>
                <p>
                    Different platforms require different favicon sizes. Here&apos;s the complete set you should generate:
                </p>
                <ul>
                    <li><strong>16×16</strong> — Standard browser tab icon (most important)</li>
                    <li><strong>32×32</strong> — Retina/high-DPI browser tabs, Windows taskbar</li>
                    <li><strong>48×48</strong> — Windows desktop/start menu icon</li>
                    <li><strong>64×64</strong> — Larger Windows tiles</li>
                    <li><strong>180×180</strong> — Apple Touch Icon (iOS home screen, Safari)</li>
                    <li><strong>192×192</strong> — Android Chrome launcher, Google search results</li>
                    <li><strong>512×512</strong> — PWA splash screen, Google PWA install prompt</li>
                </ul>

                <h2>Step 3: Convert to Favicon</h2>
                <p>
                    Use our{' '}
                    <Link href="/image-to-favicon-converter" className="text-violet-400 hover:underline">
                        faviconverter
                    </Link>{' '}
                    to generate all the sizes you need:
                </p>
                <ul>
                    <li>Upload your SVG file or paste SVG code</li>
                    <li>Select the sizes you need (defaults include all standard sizes)</li>
                    <li>Click &ldquo;Convert to Favicon&rdquo;</li>
                    <li>Preview the results in a browser tab simulation</li>
                    <li>Download the complete favicon package</li>
                </ul>
                <p>
                    The conversion happens entirely in your browser — your files are never uploaded to any server.
                </p>

                <AdPlaceholder slot="inline" className="my-8" />

                <h2>Step 4: Add to Your Project</h2>
                <p>
                    After downloading the favicon package, add the files to your project:
                </p>
                <h3>For HTML Websites</h3>
                <pre>
                    <code>{`<!-- Add to your <head> section -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />`}</code>
                </pre>

                <h3>For Next.js</h3>
                <p>
                    See our detailed{' '}
                    <Link href="/favicon-generator-nextjs" className="text-violet-400 hover:underline">
                        Next.js favicon guide
                    </Link>{' '}
                    for App Router metadata configuration and file-based setup.
                </p>

                <h3>For React (CRA / Vite)</h3>
                <p>
                    Check our{' '}
                    <Link href="/favicon-generator-react" className="text-violet-400 hover:underline">
                        React favicon guide
                    </Link>{' '}
                    for step-by-step instructions with code examples.
                </p>

                <h2>Step 5: Test Your Favicon</h2>
                <p>
                    After deployment, verify your favicon works correctly:
                </p>
                <ul>
                    <li>Open your site in multiple browsers (Chrome, Firefox, Safari, Edge)</li>
                    <li>Check the browser tab icon at normal and pinned tab sizes</li>
                    <li>Bookmark the page and verify the bookmark icon</li>
                    <li>On iOS, add to home screen and check the app icon</li>
                    <li>On Android, check the Chrome app switcher icon</li>
                    <li>Use Chrome DevTools &gt; Application tab to inspect favicon configuration</li>
                    <li>Use Google&apos;s Rich Results Test to verify structured data</li>
                </ul>

                <h2>Step 6: Deploy</h2>
                <p>
                    Your favicon files should be served from your site&apos;s root directory. Most hosting providers and
                    frameworks serve files from the <code>public/</code> directory at the root URL. Verify that
                    <code>/favicon.ico</code> returns your ICO file after deployment.
                </p>

                <AdPlaceholder slot="inline" className="my-8" />

                <h2>Favicon Formats Explained</h2>
                <h3>ICO Format</h3>
                <p>
                    The ICO (Icon) format is a container that holds multiple PNG images at different resolutions.
                    It&apos;s the most widely supported favicon format, working in all browsers including older versions of
                    Internet Explorer. An ICO file can contain 16×16, 32×32, and 48×48 variants in a single file.
                </p>
                <h3>PNG Format</h3>
                <p>
                    Modern browsers support PNG favicons via <code>&lt;link&gt;</code> tags. PNGs offer better compression
                    and quality than BMP-based ICOs. Use PNG link tags alongside ICO for the best experience.
                </p>
                <h3>SVG Format</h3>
                <p>
                    The newest favicon format — supported in Chrome, Firefox, and Edge. SVG favicons scale perfectly and
                    can be specified with: <code>&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot; href=&quot;/favicon.svg&quot;&gt;</code>
                </p>

                <h2>Common Mistakes</h2>
                <ul>
                    <li><strong>Only providing one size:</strong> Browsers need different sizes for different contexts</li>
                    <li><strong>Forgetting Apple Touch Icon:</strong> iOS users who bookmark your site won&apos;t see your custom icon</li>
                    <li><strong>Too much detail:</strong> Complex favicons look like blobs at 16×16 pixels</li>
                    <li><strong>No web manifest:</strong> PWA features and Android install prompts require it</li>
                    <li><strong>Using bitmap source:</strong> Low-resolution source images produce blurry favicons</li>
                </ul>

                <h2>Get Started</h2>
                <p>
                    Ready to create your favicon? Our{' '}
                    <Link href="/image-to-favicon-converter" className="text-violet-400 hover:underline">
                        faviconverter
                    </Link>{' '}
                    makes it easy — generate all the sizes and formats you need from a single SVG file, completely free
                    and private.
                </p>
            </div>
        </div>
    );
}
