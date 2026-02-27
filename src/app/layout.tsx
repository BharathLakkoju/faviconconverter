import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://svgtoico.dev"),
  title: {
    default: "Free Image to Favicon Converter – Generate Website Icons Online",
    template: "%s | Image to Favicon Converter",
  },
  description:
    "Convert any image to favicon online for free. Generate multi-size favicon.ico files from PNG, SVG, JPEG, WebP and more. Create website icons for Next.js, React, and any web app. 100% client-side — your files never leave your browser.",
  keywords: [
    "favicon converter",
    "image to favicon",
    "png to favicon",
    "png to ico",
    "png to ico file converter",
    "image to website icon",
    "website favicon generator",
    "website top icons",
    "website favicons",
    "image to favicons",
    "png to website icon",
    "favicon generator online free",
    "generate favicon for website",
    "create favicon from image",
    "svg to ico converter",
    "create favicon for Next.js",
    "favicon generator for React app",
    "free favicon maker",
  ],
  authors: [{ name: "Image to Favicon Converter" }],
  openGraph: {
    title: "Free Image to Favicon Converter – Generate Website Icons Online",
    description:
      "Convert PNG, SVG, JPEG, WebP to favicon.ico online for free. Generate website icons for Next.js & React. No upload required — 100% private.",
    type: "website",
    locale: "en_US",
    siteName: "Image to Favicon Converter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Image to Favicon Converter – Convert any image to website icons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image to Favicon Converter – Website Icon Generator",
    description:
      "Convert any image to favicon instantly. Generate website icons for web apps. Client-side processing — your files stay private.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="antialiased min-h-screen flex flex-col"
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
