import type { Metadata } from 'next';
import Link from 'next/link';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
    title: 'Favicon Generator for Next.js – Add Favicon to Next.js App',
    description:
        'Complete guide to adding favicons in Next.js. Generate favicon.ico from SVG, configure App Router metadata, and deploy to Vercel. Step-by-step with code examples.',
    alternates: {
        canonical: '/favicon-generator-nextjs',
    },
};

export default function FaviconNextjsPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center mb-10 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400 mb-4">
                    ▲ Next.js Guide
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="gradient-text">Favicon for Next.js</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Everything you need to know about adding favicons to your Next.js application, from generation to deployment.
                </p>
                <Link
                    href="/image-to-favicon-converter"
                    className="inline-flex items-center gap-2 mt-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg glow-button hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    ⚡ Generate Favicon Now
                </Link>
            </div>

            <AdPlaceholder slot="banner" className="mb-10" />

            <div className="seo-content">
                <h2>Adding Favicon to Next.js App Router</h2>
                <p>
                    Next.js 14+ with the App Router provides multiple ways to configure favicons. The simplest method
                    is to place your favicon files directly in the <code>app/</code> directory.
                </p>
                <h3>Method 1: File-Based (Simplest)</h3>
                <p>
                    Place these files in your <code>app/</code> directory:
                </p>
                <pre>
                    <code>{`app/
├── favicon.ico          # Auto-served at /favicon.ico
├── icon.png             # Alternative PNG icon
├── apple-icon.png       # Apple Touch Icon
└── manifest.webmanifest # Web App Manifest`}</code>
                </pre>
                <p>
                    Next.js automatically detects these files and generates the appropriate <code>&lt;link&gt;</code> tags.
                </p>

                <h3>Method 2: Metadata API (More Control)</h3>
                <p>
                    For more control over icon configuration, use the Metadata API in your <code>layout.tsx</code>:
                </p>
                <pre>
                    <code>{`// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
};`}</code>
                </pre>

                <h3>Method 3: Dynamic Icons</h3>
                <p>
                    Next.js also supports generating icons dynamically using the <code>icon.tsx</code> convention:
                </p>
                <pre>
                    <code>{`// app/icon.tsx
import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        fontSize: 24,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
        borderRadius: 6,
        color: 'white',
      }}>
        F
      </div>
    ),
    { ...size }
  );
}`}</code>
                </pre>

                <AdPlaceholder slot="inline" className="my-8" />

                <h2>Step-by-Step: Generate & Deploy</h2>
                <ul>
                    <li><strong>Step 1:</strong> Create your logo in SVG format using Figma, Illustrator, or any vector editor</li>
                    <li><strong>Step 2:</strong> Use our <Link href="/image-to-favicon-converter" className="text-violet-400 hover:underline">Image to Favicon converter</Link> to generate all favicon sizes</li>
                    <li><strong>Step 3:</strong> Download the full favicon package (ZIP)</li>
                    <li><strong>Step 4:</strong> Extract and copy all files to your <code>public/</code> directory</li>
                    <li><strong>Step 5:</strong> Add the metadata configuration to your <code>layout.tsx</code></li>
                    <li><strong>Step 6:</strong> Deploy to Vercel — favicons are automatically served from the CDN</li>
                </ul>

                <h2>Favicon on Vercel Deployment</h2>
                <p>
                    When deploying to Vercel, your favicon files in the <code>public/</code> directory are automatically served
                    from Vercel&apos;s global CDN. No additional configuration is needed. The files are cached aggressively for
                    optimal performance.
                </p>
                <p>
                    If you update your favicon, Vercel will automatically invalidate the CDN cache on your next deployment.
                    However, browsers may cache the old favicon — users might need to clear their cache to see the new icon.
                </p>

                <h2>Common Issues</h2>
                <ul>
                    <li><strong>Favicon not showing:</strong> Clear browser cache, check file path, verify <code>public/</code> directory</li>
                    <li><strong>Wrong size displayed:</strong> Ensure you have the right sizes defined in metadata</li>
                    <li><strong>Dark background issue:</strong> Design your favicon with transparency and test on both light and dark tabs</li>
                    <li><strong>Manifest errors:</strong> Verify your <code>site.webmanifest</code> JSON is valid</li>
                </ul>

                <h2>Generate Your Next.js Favicon</h2>
                <p>
                    Ready to create a perfect favicon for your Next.js app? Use our{' '}
                    <Link href="/image-to-favicon-converter" className="text-violet-400 hover:underline">
                        free Image to Favicon converter
                    </Link>{' '}
                    to generate all the files you need in seconds.
                </p>
            </div>
        </div>
    );
}
