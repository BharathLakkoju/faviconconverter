import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free faviconverter – Generate Website Icons Online',
  description:
    'Convert PNG, SVG, JPEG, WebP to favicon.ico online for free. Generate multi-size website icons and favicons for Next.js, React, and any web app. 100% client-side — your files never leave your browser.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Free faviconverter – Generate Website Icons Online',
    description:
      'Convert PNG, SVG, JPEG, WebP to favicon.ico online for free. Generate multi-size website icons and favicons for Next.js, React, and any web app. 100% client-side — your files never leave your browser.',
    url: '/',
    type: 'website',
    locale: 'en_US',
    siteName: 'faviconverter',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free faviconverter – Generate Website Icons Online',
    description:
      'Convert PNG, SVG, JPEG, WebP to favicon.ico online for free. Generate multi-size website icons and favicons for Next.js, React, and any web app. 100% client-side — your files never leave your browser.',
    images: ['/og-image.png'],
  },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-300 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 text-sm text-violet-600 dark:text-violet-400 mb-6">
          ⚡ 100% Free &amp; Private — No Upload Required
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Convert Any Image to{' '}
          <span className="gradient-text">Website Favicon</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          Upload <strong className="text-foreground">PNG, SVG, JPEG, or WebP</strong> and instantly generate
          multi-size <strong className="text-foreground">favicon.ico</strong> files, Apple Touch Icons, Android Chrome icons,
          and a complete favicon package — all processed in your browser.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/image-to-favicon-converter"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-violet-500/25 glow-button hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            🚀 Start Converting — It&apos;s Free
          </Link>
          <Link
            href="/how-to-create-favicon"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-4 text-sm font-semibold text-foreground hover:border-violet-400 transition-all"
          >
            📖 Read the Guide
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">
          Everything You Need for Website Favicons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              emoji: '🖼️',
              title: 'Any Image Format',
              desc: 'Convert PNG, SVG, JPEG, WebP, GIF, BMP, TIFF, and AVIF to favicon.ico format.',
            },
            {
              emoji: '📐',
              title: 'Multi-Size Output',
              desc: '16×16, 32×32, 48×48, 180×180, 192×192, 512×512 — all standard favicon sizes.',
            },
            {
              emoji: '📦',
              title: 'Complete Package',
              desc: 'Get favicon.ico, PNGs, Apple Touch Icon, Android Chrome icons, and web manifest.',
            },
            {
              emoji: '🔒',
              title: '100% Private',
              desc: 'All processing happens in your browser. Your files are never uploaded to any server.',
            },
            {
              emoji: '⚡',
              title: 'Instant Results',
              desc: 'No waiting — your favicons are generated in milliseconds using the Canvas API.',
            },
            {
              emoji: '💻',
              title: 'Developer Friendly',
              desc: 'Ready-to-paste HTML snippets, web manifest, and step-by-step framework guides.',
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-surface p-6 hover:border-violet-400 dark:hover:border-violet-500/40 transition-all"
            >
              <span className="text-2xl">{f.emoji}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Supported Input Formats
        </h2>
        <p className="text-muted mb-8 max-w-2xl mx-auto">
          Our faviconverter accepts virtually every image format. No matter what format your logo is in, we can convert it.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['PNG', 'SVG', 'JPEG', 'WebP', 'GIF', 'BMP', 'TIFF', 'AVIF', 'ICO'].map((fmt) => (
            <span
              key={fmt}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
            >
              .{fmt.toLowerCase()}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Upload Image', desc: 'Drag and drop your PNG, SVG, JPEG, or WebP file — or paste SVG code directly.' },
            { step: '2', title: 'Select Sizes', desc: 'Choose which favicon sizes you need for browsers, Apple, Android, and PWA.' },
            { step: '3', title: 'Download', desc: 'Get your favicon.ico and a complete ZIP package with all files ready to deploy.' },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white text-lg font-bold flex items-center justify-center mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/image-to-favicon-converter"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/20 glow-button hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            ⚡ Convert Your Image Now
          </Link>
        </div>
      </section>

      {/* Framework Guides */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">
          Framework Integration Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { href: '/favicon-generator-nextjs', emoji: '▲', title: 'Next.js', desc: 'App Router metadata, file-based icons, and Vercel deployment.' },
            { href: '/favicon-generator-react', emoji: '⚛️', title: 'React', desc: 'CRA, Vite, dynamic favicons with React Helmet.' },
            { href: '/how-to-create-favicon', emoji: '📖', title: 'Any Website', desc: 'HTML integration, sizes guide, and deployment tips.' },
          ].map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-xl border border-border bg-surface p-6 hover:border-violet-400 dark:hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5 transition-all group"
            >
              <span className="text-2xl">{g.emoji}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {g.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content Keywords */}
      <section className="py-12 sm:py-16">
        <div className="seo-content">
          <h2>Free faviconverter</h2>
          <p>
            Our <strong>faviconverter</strong> is the easiest way to create <strong>website favicons</strong> from
            any image. Whether you need to convert a <strong>PNG to favicon</strong>, transform an <strong>SVG to ICO</strong>,
            or generate <strong>website top icons</strong> from a JPEG — our tool handles it all in seconds.
          </p>
          <p>
            <strong>Favicons</strong> (also called website icons or browser tab icons) are essential for brand recognition.
            They appear in browser tabs, bookmarks, search results, and mobile home screens. Our converter generates the
            complete set of <strong>website favicons</strong> your site needs, including the multi-resolution{' '}
            <code>favicon.ico</code>, Apple Touch Icons, Android Chrome icons, and a PWA web manifest.
          </p>

          <h2>PNG to ICO File Converter</h2>
          <p>
            Looking for a <strong>PNG to ICO file converter</strong>? Upload your PNG image and instantly get a properly
            formatted ICO file containing multiple resolutions. Unlike basic tools that just rename the file extension,
            our converter creates a genuine multi-resolution ICO with proper BMP/PNG encoding inside.
          </p>

          <h2>Image to Website Icon</h2>
          <p>
            Need to convert an <strong>image to website icon</strong>? Our tool takes any image — PNG, SVG, JPEG, WebP,
            GIF, BMP — and generates all the icon files your website needs. The output includes every standard size
            from 16×16 browser tab icons to 512×512 PWA splash screens.
          </p>
        </div>
      </section>
    </div>
  );
}
