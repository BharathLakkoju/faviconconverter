import type { Metadata } from 'next';
import ConverterClient from './ConverterClient';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
    title: 'Free Image to Favicon Converter – PNG, SVG, JPEG to ICO Online',
    description:
        'Convert any image to favicon.ico online for free. Upload PNG, SVG, JPEG, WebP and generate multi-size website icons. Create favicons for your web apps instantly. 100% client-side — your files never leave your browser.',
    alternates: {
        canonical: '/svg-to-ico-converter',
    },
    keywords: [
        'favicon converter',
        'image to favicon',
        'png to favicon',
        'png to ico',
        'png to ico file converter',
        'image to website icon',
        'website favicon',
        'website top icons',
        'svg to ico converter',
        'jpeg to favicon',
        'webp to favicon',
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How do I convert an image to favicon?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Upload any image (PNG, SVG, JPEG, WebP, GIF, or BMP) using our converter, select your desired favicon sizes, and click Convert. Your image will be rendered to a multi-resolution ICO file instantly in your browser.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I convert PNG to ICO?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Simply upload your PNG file to our converter, choose the favicon sizes you need (16x16, 32x32, 48x48, etc.), and click Convert. The tool generates a multi-resolution .ico file containing all selected sizes.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is this favicon converter free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, this tool is completely free to use. There are no limits on conversions, and no account is required.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are my files uploaded to a server?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. All processing happens 100% in your browser using the Canvas API. Your image files never leave your device.',
            },
        },
        {
            '@type': 'Question',
            name: 'What image formats can I convert to favicon?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can convert SVG, PNG, JPEG, WebP, GIF, BMP, TIFF, and AVIF images to favicon.ico format. Our tool supports virtually every image format.',
            },
        },
        {
            '@type': 'Question',
            name: 'What sizes should I use for my favicon?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The standard favicon sizes are 16x16 and 32x32 for browsers, 48x48 for Windows, 180x180 for Apple devices, 192x192 for Android, and 512x512 for PWA. Our tool includes all of these by default.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does the converter support transparency?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Image transparency (from SVG and PNG files) is fully preserved during conversion. The resulting ICO and PNG files maintain the original alpha channel.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is included in the favicon package download?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The favicon package includes favicon.ico, individual PNG files for each size, apple-touch-icon.png, android-chrome icons, a site.webmanifest file, and ready-to-paste HTML snippet.',
            },
        },
    ],
};

const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Image to Favicon Converter',
    description: 'Convert PNG, SVG, JPEG, WebP and other image formats to ICO. Generate multi-size website favicons and icon packages for web apps.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
};

export default function SvgToIcoConverterPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
            />

            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
                {/* Hero */}
                <div className="text-center mb-10 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-300 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 text-sm text-violet-600 dark:text-violet-400 mb-4">
                        ⚡ 100% Free &amp; Private
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        <span className="gradient-text">Image to Favicon</span>{' '}
                        <span className="text-foreground">Converter</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Convert <strong className="text-foreground">PNG, SVG, JPEG, WebP</strong> to multi-size favicon.ico in seconds.
                        Generate website icons for Next.js, React, and any web app.{' '}
                        <span className="text-violet-600 dark:text-violet-400">No upload required.</span>
                    </p>
                </div>

                <AdPlaceholder slot="banner" className="mb-8" />

                {/* Converter Tool */}
                <ConverterClient />

                <AdPlaceholder slot="inline" className="my-10" />

                {/* SEO Content */}
                <div className="seo-content mt-16 space-y-8 animate-fade-in-up animate-delay-400">
                    <section>
                        <h2>What is a Favicon?</h2>
                        <p>
                            A <strong>favicon</strong> (short for &ldquo;favorites icon&rdquo;) is a small icon that represents your
                            website. It appears in browser tabs, bookmarks, history, and search results. The <code>favicon.ico</code>{' '}
                            file format is a special container that can hold multiple icon sizes in a single file, allowing browsers
                            to pick the most appropriate resolution.
                        </p>
                        <p>
                            Website favicons are critical for brand recognition and user experience. A well-designed favicon makes your site
                            easily identifiable among dozens of open browser tabs. Modern web apps need multiple favicon sizes to
                            support different platforms — desktop browsers, iOS, Android, and Progressive Web Apps (PWAs) all require
                            different icon resolutions.
                        </p>
                    </section>

                    <section>
                        <h2>Convert Any Image to Favicon</h2>
                        <p>
                            Our <strong>image to favicon converter</strong> supports all popular image formats. Whether you have a
                            PNG logo, an SVG vector, a JPEG photo, or a WebP graphic — you can convert it to a multi-resolution
                            ICO file with a single click. No need to use separate tools for different formats.
                        </p>
                        <ul>
                            <li><strong>PNG to Favicon:</strong> Convert PNG images to ICO format — perfect for logos with transparency</li>
                            <li><strong>SVG to Favicon:</strong> Vector graphics scale perfectly to any favicon size without quality loss</li>
                            <li><strong>JPEG to Favicon:</strong> Convert JPEG photos and logos to website icons</li>
                            <li><strong>WebP to Favicon:</strong> Modern WebP images convert seamlessly to ICO format</li>
                            <li><strong>GIF &amp; BMP:</strong> Legacy formats are fully supported too</li>
                        </ul>
                    </section>

                    <section>
                        <h2>PNG to ICO File Converter</h2>
                        <p>
                            Looking for a <strong>PNG to ICO file converter</strong>? Our tool takes your PNG image and generates
                            a professional multi-resolution ICO file containing all the favicon sizes your website needs. Simply upload
                            your PNG, select the sizes (16×16, 32×32, 48×48, 64×64, etc.), and download the ICO file instantly.
                        </p>
                        <p>
                            Unlike other converters, we don&apos;t just stuff your PNG into an ICO container — we properly scale your
                            image to each selected size with high-quality canvas rendering and transparency preservation.
                        </p>
                    </section>

                    <section>
                        <h2>Website Top Icons &amp; Favicons Explained</h2>
                        <p>
                            <strong>Website top icons</strong> (commonly called favicons) are the small images displayed in browser tabs
                            next to the page title. They also appear in bookmark lists, history, and when saving shortcuts to your home screen
                            on mobile devices.
                        </p>
                        <p>
                            Different platforms and use cases require different favicon sizes. Here&apos;s what each size is used for:
                        </p>
                        <ul>
                            <li><strong>16×16:</strong> Classic browser tab favicon — the most common size</li>
                            <li><strong>32×32:</strong> New tab page, taskbar shortcuts on Windows</li>
                            <li><strong>48×48:</strong> Windows site icons and desktop shortcuts</li>
                            <li><strong>64×64:</strong> Windows tile, higher-DPI tabs</li>
                            <li><strong>180×180:</strong> Apple Touch Icon for iOS home screen</li>
                            <li><strong>192×192:</strong> Android Chrome icon and PWA launcher</li>
                            <li><strong>512×512:</strong> PWA splash screen and high-resolution displays</li>
                        </ul>
                        <p>
                            Our converter generates all these sizes automatically from your image, ensuring your website favicon looks perfect
                            everywhere.
                        </p>
                    </section>

                    <section>
                        <h2>How to Add Favicon to Your Website</h2>
                        <p>
                            After converting your image to favicon, place the files in your project&apos;s{' '}
                            <code>public/</code> folder and add the appropriate <code>&lt;link&gt;</code> tags to your HTML:
                        </p>
                        <pre>
                            <code>{`<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />`}</code>
                        </pre>
                    </section>

                    <section>
                        <h2>Add Favicon in Next.js</h2>
                        <p>
                            Adding a favicon to a Next.js project is straightforward. Place your favicon files in the{' '}
                            <code>public/</code> folder and use the Metadata API:
                        </p>
                        <pre>
                            <code>{`// Next.js App Router (app/layout.tsx)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};`}</code>
                        </pre>
                        <p>
                            With the Next.js App Router, you can also simply place a <code>favicon.ico</code> file in the{' '}
                            <code>app/</code> directory and Next.js will automatically serve it.
                        </p>
                    </section>

                    <section>
                        <h2>Favicon for React Apps</h2>
                        <p>
                            For React apps created with Create React App or Vite, place your favicon files in the{' '}
                            <code>public/</code> directory and update your <code>index.html</code>:
                        </p>
                        <pre>
                            <code>{`<link rel="icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />`}</code>
                        </pre>
                    </section>

                    <section>
                        <h2>Favicon Best Practices 2026</h2>
                        <ul>
                            <li><strong>Use high-quality source:</strong> Start with a large, high-resolution image for the best results</li>
                            <li><strong>Use SVG when possible:</strong> Vector images produce the crispest favicons at all sizes</li>
                            <li><strong>Include multiple sizes:</strong> Don&apos;t rely on a single 16×16 — include all standard sizes</li>
                            <li><strong>Support dark mode:</strong> Consider how your favicon looks on both light and dark backgrounds</li>
                            <li><strong>Keep it simple:</strong> Favicons are tiny — use bold shapes and minimal detail</li>
                            <li><strong>Use a web manifest:</strong> Include <code>site.webmanifest</code> for PWA compatibility</li>
                            <li><strong>Test across browsers:</strong> Verify your favicon renders correctly in Chrome, Firefox, Safari, and Edge</li>
                            <li><strong>Preserve transparency:</strong> Use PNG inside ICO for transparency support</li>
                            <li><strong>Optimize file size:</strong> Keep your favicon.ico under 100KB</li>
                        </ul>
                    </section>

                    <AdPlaceholder slot="inline" className="my-8" />

                    {/* FAQ Section */}
                    <section>
                        <h2>Frequently Asked Questions</h2>

                        <div className="space-y-4 mt-4">
                            {[
                                {
                                    q: 'How do I convert an image to favicon?',
                                    a: 'Upload any image (PNG, SVG, JPEG, WebP, GIF, or BMP) using the converter above, select your desired favicon sizes, and click "Convert to Favicon". Your image will be converted to a multi-size ICO file instantly in your browser.',
                                },
                                {
                                    q: 'How do I convert PNG to ICO?',
                                    a: 'Simply upload your PNG file, choose the sizes you want (16×16, 32×32, etc.), and click Convert. The tool creates a proper multi-resolution .ico file from your PNG image.',
                                },
                                {
                                    q: 'What image formats are supported?',
                                    a: 'We support SVG, PNG, JPEG, WebP, GIF, BMP, TIFF, and AVIF. You can convert virtually any image format to favicon.ico.',
                                },
                                {
                                    q: 'Is this favicon converter free?',
                                    a: 'Yes! This tool is completely free with no limits on conversions. No account required.',
                                },
                                {
                                    q: 'Are my files uploaded to a server?',
                                    a: 'No. All processing uses the Canvas API in your browser. Your image files never leave your device — 100% private.',
                                },
                                {
                                    q: 'What sizes should I use for website favicons?',
                                    a: 'We recommend 16×16, 32×32, 48×48, 180×180 (Apple), 192×192 (Android), and 512×512 (PWA) for full platform coverage.',
                                },
                                {
                                    q: 'Does the converter preserve transparency?',
                                    a: 'Yes. Transparency from PNG and SVG files is fully preserved during conversion to ICO format.',
                                },
                                {
                                    q: 'What is included in the favicon package?',
                                    a: 'The ZIP package includes favicon.ico, individual PNGs at each size, apple-touch-icon.png, android-chrome icons, site.webmanifest, and a ready-to-paste HTML snippet.',
                                },
                            ].map((faq, i) => (
                                <details
                                    key={i}
                                    className="group glass-card overflow-hidden"
                                >
                                    <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-foreground hover:text-violet-600 dark:hover:text-violet-400 flex items-center justify-between transition-colors">
                                        {faq.q}
                                        <span className="text-violet-600 dark:text-violet-400 group-open:rotate-45 transition-transform text-lg">+</span>
                                    </summary>
                                    <div className="px-5 pb-4 text-sm text-muted leading-relaxed">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
