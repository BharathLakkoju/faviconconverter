import type { Metadata } from 'next';
import Link from 'next/link';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
    title: 'Favicon Generator for React – Add Favicon to React App',
    description:
        'How to add a favicon to your React app. Works with Create React App, Vite, and custom setups. Generate favicon from SVG, add HTML tags, and deploy.',
    alternates: {
        canonical: '/favicon-generator-react',
    },
};

export default function FaviconReactPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center mb-10 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-400 mb-4">
                    ⚛️ React Guide
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="gradient-text">Favicon for React</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Learn how to add and configure favicons in your React application, whether you&apos;re using Create React App, Vite, or a custom build.
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
                <h2>Adding Favicon to Create React App (CRA)</h2>
                <p>
                    Create React App comes with a default favicon. To replace it with your own:
                </p>
                <ul>
                    <li>Generate your favicon package using our <Link href="/image-to-favicon-converter" className="text-violet-400 hover:underline">Image to Favicon converter</Link></li>
                    <li>Replace <code>public/favicon.ico</code> with your new ICO file</li>
                    <li>Add additional PNG files to the <code>public/</code> directory</li>
                    <li>Update <code>public/index.html</code> with the proper link tags</li>
                </ul>
                <pre>
                    <code>{`<!-- public/index.html -->
<head>
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32"
        href="%PUBLIC_URL%/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16"
        href="%PUBLIC_URL%/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180"
        href="%PUBLIC_URL%/apple-touch-icon.png" />
  <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
</head>`}</code>
                </pre>

                <h2>Adding Favicon to Vite + React</h2>
                <p>
                    For React apps using Vite as the build tool:
                </p>
                <ul>
                    <li>Copy your favicon files to the <code>public/</code> directory</li>
                    <li>Update <code>index.html</code> (located at the project root in Vite)</li>
                </ul>
                <pre>
                    <code>{`<!-- index.html (Vite project root) -->
<head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32"
        href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16"
        href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180"
        href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</head>`}</code>
                </pre>
                <p>
                    Note: In Vite, you don&apos;t need the <code>%PUBLIC_URL%</code> prefix — just use absolute paths starting
                    with <code>/</code>.
                </p>

                <AdPlaceholder slot="inline" className="my-8" />

                <h2>React Helmet for Dynamic Favicons</h2>
                <p>
                    If you need to change the favicon dynamically (e.g., per page or based on state), you can use{' '}
                    <code>react-helmet-async</code>:
                </p>
                <pre>
                    <code>{`import { Helmet } from 'react-helmet-async';

function MyPage() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/custom-favicon.ico" />
      </Helmet>
      <div>Page content</div>
    </>
  );
}`}</code>
                </pre>

                <h2>PWA Favicon Setup in React</h2>
                <p>
                    For Progressive Web Apps, you need a <code>manifest.json</code> (or <code>site.webmanifest</code>) that
                    specifies your app icons:
                </p>
                <pre>
                    <code>{`{
  "name": "My React App",
  "short_name": "ReactApp",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}`}</code>
                </pre>

                <h2>File Structure</h2>
                <pre>
                    <code>{`public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-48x48.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest`}</code>
                </pre>

                <h2>Generate Your React Favicon</h2>
                <p>
                    Use our{' '}
                    <Link href="/image-to-favicon-converter" className="text-violet-400 hover:underline">
                        free Image to Favicon converter
                    </Link>{' '}
                    to generate all the favicon files you need. Download the full package, extract to <code>public/</code>,
                    and you&apos;re done!
                </p>
            </div>
        </div>
    );
}
