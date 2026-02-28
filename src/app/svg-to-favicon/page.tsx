import type { Metadata } from 'next';
import Link from 'next/link';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
    title: 'SVG to Favicon – Convert SVG to Favicon Online Free',
    description:
        'Convert any SVG file to a professional favicon package. Supports multi-size ICO, Apple Touch Icons, and PWA icons. Free and 100% private.',
    alternates: {
        canonical: '/svg-to-favicon',
    },
};

export default function SvgToFaviconPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center mb-10 animate-fade-in-up">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="gradient-text">SVG to Favicon</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    The fastest way to convert your SVG logo into a complete favicon set for any website or web app.
                </p>
                <Link
                    href="/image-to-favicon-converter"
                    className="inline-flex items-center gap-2 mt-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg glow-button hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    ⚡ Convert SVG to Favicon Now
                </Link>
            </div>

            <AdPlaceholder slot="banner" className="mb-10" />

            <div className="seo-content">
                <h2>Convert SVG to Favicon in 3 Steps</h2>
                <p>
                    Converting an SVG file to a favicon is quick and easy with our tool. Here&apos;s how it works:
                </p>
                <ul>
                    <li><strong>Upload:</strong> Drag and drop your SVG file or paste SVG code directly</li>
                    <li><strong>Configure:</strong> Choose which favicon sizes you need</li>
                    <li><strong>Download:</strong> Get your favicon.ico and complete favicon package</li>
                </ul>
                <p>
                    The entire process happens in your browser — no server upload, no waiting, no privacy concerns.
                </p>

                <h2>Why Convert SVG to Favicon?</h2>
                <p>
                    Most websites start with a logo in SVG format, designed in tools like Figma, Sketch, or Illustrator.
                    However, browsers need favicons in specific sizes and formats. Converting your SVG ensures:
                </p>
                <ul>
                    <li>Pixel-perfect rendering at every size from 16×16 to 512×512</li>
                    <li>Full transparency support for any background</li>
                    <li>Multi-resolution ICO file for maximum browser compatibility</li>
                    <li>Apple Touch Icon for iOS bookmark/home screen</li>
                    <li>Android Chrome icons for app-like behavior</li>
                    <li>Web manifest for PWA compliance</li>
                </ul>

                <h2>SVG vs PNG for Favicon Source</h2>
                <p>
                    While you can use PNG as a favicon source, SVG is significantly better for several reasons:
                </p>
                <ul>
                    <li><strong>Quality:</strong> SVG scales perfectly — PNG gets pixelated when enlarged</li>
                    <li><strong>Flexibility:</strong> One SVG file produces unlimited size variations</li>
                    <li><strong>File size:</strong> SVG is typically smaller than high-resolution PNG</li>
                    <li><strong>Editability:</strong> SVG can be edited in code or design tools</li>
                </ul>
                <p>
                    If you only have a PNG logo, consider converting it to SVG first using a vectorization tool, or at least
                    ensure your source PNG is high resolution (at least 512×512) for best results.
                </p>

                <AdPlaceholder slot="inline" className="my-8" />

                <h2>What Favicon Formats Do Browsers Support?</h2>
                <p>
                    Modern browsers support several favicon formats, but for maximum compatibility, you should include:
                </p>
                <ul>
                    <li><strong>ICO:</strong> Universal format, supported by all browsers including IE</li>
                    <li><strong>PNG:</strong> Modern browsers prefer PNG link tags for crisp rendering</li>
                    <li><strong>SVG:</strong> Some modern browsers support SVG favicons via <code>&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot;&gt;</code></li>
                </ul>
                <p>
                    Our converter generates both ICO and PNG formats, giving you the best of both worlds.
                </p>

                <h2>Deploying Your Favicon</h2>
                <p>
                    After downloading your favicon package, deployment is straightforward:
                </p>
                <ul>
                    <li>Extract the ZIP file</li>
                    <li>Copy all files to your project&apos;s <code>public/</code> directory</li>
                    <li>Add the HTML snippet to your <code>&lt;head&gt;</code> tag</li>
                    <li>Deploy your site and verify in browser DevTools</li>
                </ul>

                <h2>Ready to Convert?</h2>
                <p>
                    Head to our{' '}
                    <Link href="/image-to-favicon-converter" className="text-violet-400 hover:underline">
                        faviconverter
                    </Link>{' '}
                    to create your favicon package in seconds.
                </p>
            </div>
        </div>
    );
}
