import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | faviconverter',
    description: 'Privacy policy for faviconverter. Your files never leave your browser.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
            <h1 className="text-3xl font-extrabold mb-8 gradient-text">Privacy Policy</h1>

            <div className="seo-content space-y-6">
                <p><em>Last updated: February 2026</em></p>

                <h2>1. Information We Do Not Collect</h2>
                <p>
                    <strong>faviconverter</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your
                    privacy. This Privacy Policy explains how we handle information when you use our website and conversion tools.
                </p>

                <h2>File Processing</h2>
                <p>
                    <strong>Your files never leave your browser.</strong> All image to favicon conversion, favicon generation, and file
                    processing is performed entirely on the client side using browser APIs (Canvas API, JavaScript). No files are
                    uploaded to our servers, stored, or transmitted to any third party.
                </p>

                <h2>Data We Collect</h2>
                <p>We do not collect any personal data, file data, or usage data from the conversion tool itself. We may collect:</p>
                <ul>
                    <li><strong>Analytics data:</strong> Anonymous page visit statistics via standard web analytics (page views, referrer, browser type). No personally identifiable information is collected.</li>
                    <li><strong>Ad-related data:</strong> If ads are displayed (Google AdSense), Google may use cookies for ad personalization. See Google&apos;s Privacy Policy for details.</li>
                </ul>

                <h2>Cookies</h2>
                <p>
                    We use minimal cookies for essential functionality (e.g., theme preference). Third-party ad services may set
                    additional cookies as described in their respective privacy policies.
                </p>

                <h2>Third-Party Services</h2>
                <ul>
                    <li><strong>Google AdSense:</strong> May be used for displaying advertisements. Subject to Google&apos;s privacy policy.</li>
                    <li><strong>Vercel:</strong> Our hosting provider. Subject to Vercel&apos;s privacy policy.</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                    Since we do not collect or store your files, there is no risk of file data breach from our end. Your files
                    remain on your device at all times during processing.
                </p>

                <h2>Children&apos;s Privacy</h2>
                <p>
                    Our service is not directed to children under 13. We do not knowingly collect personal information from children.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
                    &ldquo;Last updated&rdquo; date.
                </p>

                <h2>Contact</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us through our website.
                </p>
            </div>
        </div>
    );
}
