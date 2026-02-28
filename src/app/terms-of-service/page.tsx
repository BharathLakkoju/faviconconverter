import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | faviconverter',
    description: 'Terms of service for faviconverter.',
    alternates: {
        canonical: '/terms-of-service',
    },
};

export default function TermsOfServicePage() {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
            <h1 className="text-3xl font-extrabold mb-8 gradient-text">Terms of Service</h1>

            <div className="seo-content space-y-6">
                <p><em>Last updated: February 2026</em></p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing and using faviconverter (&ldquo;the Service&rdquo;), you agree to be bound by these Terms
                    of Service. If you do not agree, please do not use the Service.
                </p>

                <h2>2. Description of Service</h2>
                <p>
                    faviconverter provides a free, browser-based tool for converting images to ICO format and generating
                    favicon packages. All processing is performed client-side in your browser.
                </p>

                <h2>No File Storage</h2>
                <p>
                    We do not upload, store, or process your files on our servers. All conversion takes place locally in your
                    browser. We have no access to any files you process through our tool.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                    You retain all rights to your uploaded files and generated outputs. We claim no ownership over any content
                    you create or convert using our tool.
                </p>

                <h2>Disclaimer of Warranties</h2>
                <p>
                    The Service is provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied. We do
                    not guarantee that the Service will be uninterrupted, error-free, or that the conversion results will be
                    perfect for all use cases.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or
                    consequential damages arising from your use of the Service.
                </p>

                <h2>Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>Use the Service for any unlawful purpose</li>
                    <li>Attempt to reverse engineer or disrupt the Service</li>
                    <li>Use automated tools to scrape or overload the Service</li>
                    <li>Upload content that infringes on others&apos; intellectual property rights</li>
                </ul>

                <h2>Changes to Terms</h2>
                <p>
                    We may modify these Terms at any time. Continued use of the Service after changes constitutes acceptance
                    of the updated Terms.
                </p>

                <h2>Governing Law</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with applicable laws.
                </p>

                <h2>Contact</h2>
                <p>
                    For questions about these Terms, please contact us through our website.
                </p>
            </div>
        </div>
    );
}
